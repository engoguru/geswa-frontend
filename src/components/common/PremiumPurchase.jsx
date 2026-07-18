import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPurchasePlan } from "../../reduxStore/slice/premiumPurchaseSlice";
import { getOneMemberPlan } from "../../reduxStore/slice/memberplanSlice";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
function PremiumPurchase() {
    const [searchParams] = useSearchParams();

    const ref = searchParams.get("ref");
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [wait, setWait] = useState(false)
    const { loginUserData, authChecked } = useSelector(
        (state) => state.user
    );

    const { currentPlan, loading } = useSelector(
        (state) => state.memberPlan
    );

    const [form, setForm] = useState({
        startDate: "",
        paymentMethod: "ONLINE"
    });

    // console.log(loginUserData)
    useEffect(() => {

        if (!authChecked) return;


        if (!loginUserData?.user) {

            const url =
                window.location.pathname +
                window.location.search;


            if (!url.includes("/sign-in")) {

                localStorage.setItem(
                    "purchaseUrlGS",
                    url
                );

            }


            navigate("/sign-in");
            return;
        }


        if (id) {
            dispatch(getOneMemberPlan(id));
        }

    }, [
        authChecked,
        loginUserData,
        id,
        dispatch,
        navigate
    ]);


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    const handlePurchase = async () => {

        if (!id) {
            toast.error("Invalid membership plan");
            return;
        }

        if (!form.startDate) {
            toast.error("Please select start date");
            return;
        }
// toast
        try {

            setWait(true);

            await dispatch(
                createPurchasePlan({
                    membershipId: Number(id),
                    employeeAssignmentId: ref ? Number(ref) : null,
                    startDate: form.startDate,
                    paymentMethod: form.paymentMethod
                })
            ).unwrap();


            localStorage.removeItem("purchaseUrlGS");

            toast.success("Membership purchased successfully");

            navigate("/user");


        } catch (error) {

            console.log(error);

            toast.error(
                error?.message || "Purchase failed"
            );

        } finally {

            setWait(false);

        }
    };


    if (loading || !currentPlan) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Navbar />

            <div className="bg-gray-50 min-h-screen py-16">
                <div className="max-w-5xl mx-auto px-4">

                    <div className="bg-white rounded-3xl shadow p-8">

                        <h1 className="text-3xl font-bold">
                            Complete Membership Purchase
                        </h1>


                        <div className="mt-8 bg-gray-100 rounded-2xl p-6">

                            <h2 className="text-2xl font-semibold">
                                {currentPlan.name}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                {currentPlan.description}
                            </p>

                            <div className="text-4xl font-bold text-primary mt-5">
                                ₹{currentPlan.price}
                            </div>

                        </div>


                        <div className="grid md:grid-cols-2 gap-5 mt-8">

                            <input
                                type="date"
                                name="startDate"
                                value={form.startDate}
                                onChange={handleChange}
                                className="border rounded-xl p-3"
                            />


                            <select
                                name="paymentMethod"
                                value={form.paymentMethod}
                                onChange={handleChange}
                                className="border rounded-xl p-3"
                            >
                                <option value="ONLINE">
                                    Online Payment
                                </option>

                                <option value="CASH">
                                    Cash
                                </option>

                            </select>

                        </div>


                        <button
                            onClick={handlePurchase}
                            disabled={wait}
                            className={`mt-10 bg-primary text-white px-10 py-4 rounded-xl ${wait ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {wait
                                ? "Processing..."
                                : `Continue Payment ₹${currentPlan.price}`
                            }
                        </button>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default PremiumPurchase;