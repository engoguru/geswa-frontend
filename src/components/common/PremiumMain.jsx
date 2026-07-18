import React,{useEffect,useState} from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import {useDispatch,useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {getMemberPlans,getOneMemberPlan} from "../../reduxStore/slice/memberplanSlice";
import { useNavigate } from "react-router-dom";
function PremiumMain(){


const navigate = useNavigate();
const dispatch=useDispatch();
const [searchParams,setSearchParams]=useSearchParams();

const {plans,currentPlan,loading}=useSelector(state=>state.memberPlan);

const id=searchParams.get("id");
const [selectedPlan,setSelectedPlan]=useState(null);


useEffect(()=>{
    dispatch(getMemberPlans({page:1,limit:100}));
},[dispatch]);


useEffect(()=>{
    if(id) dispatch(getOneMemberPlan(id));
},[id,dispatch]);


useEffect(()=>{
    if(currentPlan) setSelectedPlan(currentPlan);
},[currentPlan]);


useEffect(()=>{
    if(plans.length && !id){
        setSearchParams({id:plans[0].id});
    }
},[plans]);


const changePlan=(plan)=>{
    setSearchParams({id:plan.id});
    dispatch(getOneMemberPlan(plan.id));
};


if(loading && !selectedPlan){
    return <div className="h-screen flex items-center justify-center">
        Loading...
    </div>
}


return(
<>
<Navbar/>

<div className="bg-gray-50 py-16 min-h-screen">
<div className="max-w-7xl mx-auto px-4">


<div className="text-center">
<span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs">
Premium Healthcare Plans
</span>

<h1 className="text-4xl font-bold mt-6">
Choose Your Membership
</h1>

<p className="text-gray-500 mt-3">
Affordable healthcare benefits for you and your family
</p>
</div>



<div className="grid md:grid-cols-3 gap-6 mt-14">

{
plans.map(plan=>(

<div
key={plan.id}
onClick={()=>changePlan(plan)}
className={`bg-white rounded-3xl p-7 cursor-pointer transition hover:-translate-y-2 shadow ${
selectedPlan?.id===plan.id
?"border-2 border-primary"
:"border"
}`}>


{
selectedPlan?.id===plan.id &&
<div className="text-xs text-primary font-semibold">
CURRENT PLAN
</div>
}


<h2 className="text-2xl font-bold mt-3">
{plan.name}
</h2>


<div className="mt-5">
<span className="text-4xl font-bold">
₹{plan.price}
</span>

<span className="text-gray-400 ml-2">
{
plan.durationUnit==="LIFETIME"
?"Lifetime"
:`${plan.durationValue} ${plan.durationUnit}`
}
</span>
</div>


<p className="text-gray-500 mt-4 line-clamp-2">
{plan.description}
</p>


<button className="w-full bg-black text-white py-3 rounded-xl mt-7">
View Details
</button>


</div>

))
}

</div>



{
selectedPlan &&

<div className="bg-white rounded-3xl shadow-xl mt-16 overflow-hidden">


<div className="bg-primary text-white p-8 md:p-12">

<div className="flex flex-col md:flex-row justify-between gap-8">


<div>

<span className="bg-white/20 px-4 py-2 rounded-full text-xs">
Selected Membership
</span>


<h2 className="text-4xl font-bold mt-6">
{selectedPlan.name}
</h2>


<p className="text-white/80 mt-4 max-w-xl">
{selectedPlan.description}
</p>


</div>



<div className="bg-white text-black rounded-3xl p-8 min-w-[260px]">


<p className="text-gray-400 text-sm">
Membership Fee
</p>


<h3 className="text-5xl font-bold text-primary mt-2">
₹{selectedPlan.price}
</h3>


<p className="text-gray-500 mt-3">
{
    selectedPlan.durationUnit==="LIFETIME"
    ? "Lifetime Access"
    : `${selectedPlan.durationValue} ${selectedPlan.durationUnit}`
}
</p>

<button
    onClick={() => navigate(`/premium-purchase/${selectedPlan.id}`)}
    className="w-full bg-primary text-white py-4 rounded-xl mt-6"
>
    Purchase Now
</button>


</div>


</div>

</div>




<div className="p-8 md:p-12">


<h3 className="text-2xl font-bold">
Plan Benefits
</h3>


<div className="grid md:grid-cols-2 gap-5 mt-6">

{
selectedPlan.benefits?.map((item,index)=>(

<div
key={index}
className="flex gap-4 items-center bg-green-50 rounded-2xl p-5"
>

<div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
✓
</div>


<p>
{item}
</p>

</div>

))
}

</div>




<h3 className="text-2xl font-bold mt-12">
Membership Summary
</h3>


<div className="grid md:grid-cols-4 gap-5 mt-6">


<div className="bg-gray-50 p-6 rounded-2xl">
<p className="text-xs text-gray-400">
PLAN STATUS
</p>

<h4 className={`mt-3 font-bold ${
selectedPlan.isActive?"text-green-600":"text-red-600"
}`}>
{selectedPlan.isActive?"Active":"Inactive"}
</h4>
</div>



<div className="bg-gray-50 p-6 rounded-2xl">
<p className="text-xs text-gray-400">
DURATION
</p>

<h4 className="mt-3 font-bold">
{
selectedPlan.durationUnit==="LIFETIME"
?"Lifetime"
:`${selectedPlan.durationValue} ${selectedPlan.durationUnit}`
}
</h4>
</div>



<div className="bg-gray-50 p-6 rounded-2xl">
<p className="text-xs text-gray-400">
PAYMENT
</p>

<h4 className="mt-3 font-bold">
One Time
</h4>
</div>



<div className="bg-gray-50 p-6 rounded-2xl">
<p className="text-xs text-gray-400">
MEMBERSHIP ID
</p>

<h4 className="mt-3 font-bold">
#{selectedPlan.id}
</h4>
</div>


</div>




<div className="bg-gray-900 text-white rounded-3xl p-8 mt-12">

<h3 className="text-2xl font-bold">
How It Works
</h3>


<div className="grid md:grid-cols-3 gap-6 mt-6">


<div>
<h4 className="font-semibold">
Purchase
</h4>
<p className="text-gray-400 text-sm mt-2">
Complete payment and activate membership.
</p>
</div>


<div>
<h4 className="font-semibold">
Get Member ID
</h4>
<p className="text-gray-400 text-sm mt-2">
Show your ID at partner hospitals.
</p>
</div>


<div>
<h4 className="font-semibold">
Use Benefits
</h4>
<p className="text-gray-400 text-sm mt-2">
Receive healthcare discounts.
</p>
</div>


</div>

</div>


</div>

</div>

}


</div>
</div>

<Footer/>
</>
)

}

export default PremiumMain;