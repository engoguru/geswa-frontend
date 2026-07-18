
// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/layout/Navbar";
// import Footer from "../../components/layout/Footer";
// import { getAssignedHospitalUser } from "../../reduxStore/slice/partnerSlice";
// import { logoutUser } from "../../reduxStore/slice/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { getAllPurchasePlan } from "../../reduxStore/slice/premiumPurchaseSlice";
// import { createMembershipService, getAllMembershipService } from "../../reduxStore/slice/premiumServiceSlice";

// function HospitalDashboard() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [search, setSearch] = useState()

//   const { loginUserData } = useSelector((state) => state.user);
//   const { assignedHospitalData } = useSelector((state) => state.hospital);
//   const { purchaseAll } = useSelector((state) => state.memberPurchase);

//   useEffect(() => {
//     if (loginUserData?.user?.id) {
//       dispatch(getAssignedHospitalUser(loginUserData.user.id));

//       // dispatch(getAllMembershipService())
//     }
//   }, [dispatch, loginUserData]);

//   useEffect(() => {
//     dispatch(getAllPurchasePlan(search));
//   }, [search, dispatch]);

//   const handleLogout = async () => {
//     try {
//       await dispatch(logoutUser()).unwrap();

//       toast.success("Logged out successfully");
//       navigate("/", { replace: true });

//     } catch (error) {
//       toast.error(error || "Failed to logout");
//     }
//   };

//   const handleCreateService=async()=>{


//     dispatch(createMembershipService())
//   }
// console.log(purchaseAll,"pp")
//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-100 p-6">
//         <div className="max-w-7xl mx-auto">

//           {/* Header */}
//           <div className="mb-6 flex justify-between items-center">

//             <div>
//               <h1 className="text-3xl font-bold text-gray-800">
//                 Hospital Dashboard
//               </h1>

//               <p className="text-gray-500 mt-1">
//                 Manage members, services and billing history
//               </p>
//             </div>

//             <button
//               onClick={handleLogout}
//               className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
//             >
//               Logout
//             </button>

//           </div>


//           {/* Hospital Details */}
//           {assignedHospitalData?.hospital && (
//             <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

//               <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                 Hospital Details
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

//                 <div>
//                   <p className="text-gray-500 text-sm">
//                     Hospital Name
//                   </p>
//                   <p className="font-semibold text-gray-800">
//                     {assignedHospitalData.hospital.name}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-gray-500 text-sm">
//                     Rating
//                   </p>
//                   <p className="font-semibold text-yellow-600">
//                     ⭐ {assignedHospitalData.hospital.rating}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-gray-500 text-sm">
//                     Reviews
//                   </p>
//                   <p className="font-semibold">
//                     {assignedHospitalData.hospital.reviews}
//                   </p>
//                 </div>

//               </div>

//               <div className="mt-4">
//                 <p className="text-gray-500 text-sm">
//                   Tagline
//                 </p>

//                 <p className="text-gray-700">
//                   {assignedHospitalData.hospital.tagline}
//                 </p>
//               </div>

//             </div>
//           )}



//           {/* Your existing Stats section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

//             <div className="bg-white rounded-xl shadow-sm p-5">
//               <p className="text-gray-500 text-sm">
//                 Total Members Served
//               </p>
//               <h2 className="text-3xl font-bold text-blue-600 mt-2">
//                 245
//               </h2>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-5">
//               <p className="text-gray-500 text-sm">
//                 Today's Services
//               </p>
//               <h2 className="text-3xl font-bold text-green-600 mt-2">
//                 18
//               </h2>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-5">
//               <p className="text-gray-500 text-sm">
//                 Total Discount Given
//               </p>
//               <h2 className="text-3xl font-bold text-purple-600 mt-2">
//                 ₹85,000
//               </h2>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-5">
//               <p className="text-gray-500 text-sm">
//                 Total Revenue
//               </p>
//               <h2 className="text-3xl font-bold text-orange-600 mt-2">
//                 ₹4.5L
//               </h2>
//             </div>

//           </div>


//           {/* Keep your Search Member, Recent Services and Quick Actions here unchanged */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//             {/* Member Search */}
//             <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-1">

//               <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                 Search Member
//               </h2>

//               <input
//                 type="text"
//                 placeholder="Enter Member ID"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
//                 Search
//               </button>


//               <div className="mt-6 bg-gray-50 rounded-lg p-4">

//                 <h3 className="font-semibold text-gray-800">
//                   Member Details
//                 </h3>

//                 <div className="mt-3 space-y-2 text-sm text-gray-600">
//                   <p>
//                     Name:
//                     <span className="font-medium text-gray-800">
//                       {" "}Rahul Kumar
//                     </span>
//                   </p>

//                   <p>
//                     Member ID:
//                     <span className="font-medium text-gray-800">
//                       {" "}MEM-12345
//                     </span>
//                   </p>

//                   <p>
//                     Plan:
//                     <span className="font-medium text-green-600">
//                       {" "}Premium
//                     </span>
//                   </p>

//                   <p>
//                     Status:
//                     <span className="font-medium text-green-600">
//                       {" "}Active
//                     </span>
//                   </p>
//                 </div>

//                 <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
//                   Create Service Entry
//                 </button>

//               </div>

//             </div>



//             {/* Recent Services */}
//             <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">

//               <div className="flex justify-between items-center mb-5">

//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Recent Services
//                 </h2>

//                 <button className="text-blue-600 text-sm">
//                   View All
//                 </button>

//               </div>


//               <div className="overflow-x-auto">

//                 <table className="w-full text-sm">

//                   <thead>
//                     <tr className="border-b text-gray-500">
//                       <th className="text-left py-3">
//                         Member ID
//                       </th>

//                       <th className="text-left py-3">
//                         Service
//                       </th>

//                       <th className="text-left py-3">
//                         Bill
//                       </th>

//                       <th className="text-left py-3">
//                         Discount
//                       </th>

//                       <th className="text-left py-3">
//                         Date
//                       </th>
//                     </tr>
//                   </thead>


//                   <tbody>

//                     <tr className="border-b">
//                       <td className="py-3">
//                         MEM-12345
//                       </td>

//                       <td>
//                         MRI Scan
//                       </td>

//                       <td>
//                         ₹12000
//                       </td>

//                       <td className="text-green-600">
//                         ₹4000
//                       </td>

//                       <td>
//                         16 July 2026
//                       </td>
//                     </tr>


//                     <tr className="border-b">
//                       <td className="py-3">
//                         MEM-45678
//                       </td>

//                       <td>
//                         Blood Test
//                       </td>

//                       <td>
//                         ₹2000
//                       </td>

//                       <td className="text-green-600">
//                         ₹500
//                       </td>

//                       <td>
//                         15 July 2026
//                       </td>
//                     </tr>


//                   </tbody>

//                 </table>

//               </div>

//             </div>

//           </div>




//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default HospitalDashboard;





import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { getAssignedHospitalUser } from "../../reduxStore/slice/partnerSlice";
import { logoutUser } from "../../reduxStore/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllPurchasePlan } from "../../reduxStore/slice/premiumPurchaseSlice";
import { createMembershipService, getAllMembershipService } from "../../reduxStore/slice/premiumServiceSlice";

function HospitalDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [searchedMemberId, setSearchedMemberId] = useState(""); // the value actually searched
  const [foundPurchase, setFoundPurchase] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const [showServiceModal, setShowServiceModal] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    serviceName: "",
    serviceDetails: "",
    actualBillAmount: "",
    offerAmount: "",
    finalAmount: "",
    billFile: null,
  });
  const [saving, setSaving] = useState(false);

  const { loginUserData } = useSelector((state) => state.user);
  const { assignedHospitalData } = useSelector((state) => state.hospital);
  const { purchaseAll } = useSelector((state) => state.memberPurchase);
  const { services } = useSelector((state) => state.memberService);

  useEffect(() => {
    if (loginUserData?.user?.id) {
      dispatch(getAssignedHospitalUser(loginUserData.user.id));
    }
  }, [dispatch, loginUserData]);

  // Fetch the full purchase list once (no need to re-fetch on every keystroke)
  useEffect(() => {
    if (assignedHospitalData?.hospital?.id) {
      dispatch(
        getAllMembershipService(
          assignedHospitalData.hospital.id
        )
      );
    }
  }, [assignedHospitalData, dispatch]);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast.success("Logged out successfully");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error || "Failed to logout");
    }
  };

  // Normalize purchaseAll into a plain array regardless of API shape
  const getPurchaseList = () => {
    if (Array.isArray(purchaseAll)) return purchaseAll;
    if (Array.isArray(purchaseAll?.data)) return purchaseAll.data;
    if (Array.isArray(purchaseAll?.purchases)) return purchaseAll.purchases;
    return [];
  };

  const handleSearch = () => {
    const trimmed = search.trim();
    setSearchedMemberId(trimmed);

    if (!trimmed) {
      setFoundPurchase(null);
      setNotFound(false);
      return;
    }

    const list = getPurchaseList();
    const match = list.find(
      (p) => p?.memberId?.toLowerCase() === trimmed.toLowerCase()
    );

    if (match) {
      setFoundPurchase(match);
      setNotFound(false);
    } else {
      setFoundPurchase(null);
      setNotFound(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const openServiceModal = () => {
    if (!foundPurchase) return;
    setServiceForm({
      serviceName: "",
      serviceDetails: "",
      actualBillAmount: "",
      offerAmount: "",
      finalAmount: "",
      billFile: null,
    });
    setShowServiceModal(true);
  };

  const closeServiceModal = () => {
    if (saving) return;
    setShowServiceModal(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setServiceForm((prev) => {
      const next = { ...prev, [name]: value };

      // Auto-calc finalAmount whenever actual/offer changes,
      // unless the user is directly editing finalAmount
      if (name === "actualBillAmount" || name === "offerAmount") {
        const actual = parseFloat(name === "actualBillAmount" ? value : prev.actualBillAmount) || 0;
        const offer = parseFloat(name === "offerAmount" ? value : prev.offerAmount) || 0;
        next.finalAmount = Math.max(actual - offer, 0).toFixed(2);
      }

      return next;
    });
  };

  const handleFileChange = (e) => {
    setServiceForm((prev) => ({ ...prev, billFile: e.target.files?.[0] || null }));
  };

  const handleCreateService = async (e) => {
    e.preventDefault();

    if (!foundPurchase) {
      toast.error("No member selected");
      return;
    }

    if (!serviceForm.serviceName || !serviceForm.actualBillAmount) {
      toast.error("Service name and bill amount are required");
      return;
    }

    setSaving(true);

    try {
      const formData = new FormData();

      formData.append("membershipPurchaseId", foundPurchase.id);
      formData.append("hospitalId", assignedHospitalData?.hospital?.id);
      formData.append("serviceName", serviceForm.serviceName);
      formData.append("serviceDetails", serviceForm.serviceDetails);
      formData.append("actualBillAmount", serviceForm.actualBillAmount);
      formData.append("offerAmount", serviceForm.offerAmount || 0);
      formData.append(
        "finalAmount",
        serviceForm.finalAmount || serviceForm.actualBillAmount
      );

      if (serviceForm.billFile) {
        formData.append("Invoice", serviceForm.billFile);
      }

      await dispatch(createMembershipService(formData)).unwrap();

      toast.success("Service created successfully");
      setShowServiceModal(false);
      dispatch(getAllMembershipService());

    } catch (error) {
      toast.error(error || "Failed to create service");
    } finally {
      setSaving(false);
    }
  };
  const totalMembers = new Set(
    services?.map(item => item.membershipPurchaseId)
  ).size;

  const todayServices = services?.filter(item => {
    const today = new Date().toDateString();
    return new Date(item.usedAt).toDateString() === today;
  }).length || 0;

  const totalDiscount = services?.reduce(
    (sum, item) => sum + Number(item.offerAmount || 0),
    0
  );

  const totalRevenue = services?.reduce(
    (sum, item) => sum + Number(item.finalAmount || 0),
    0
  );
  console.log(services)
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Hospital Dashboard</h1>
              <p className="text-gray-500 mt-1">Manage members, services and billing history</p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          {/* Hospital Details */}
          {assignedHospitalData?.hospital && (
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Hospital Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <p className="text-gray-500 text-sm">Hospital Name</p>
                  <p className="font-semibold text-gray-800">{assignedHospitalData.hospital.name}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Rating</p>
                  <p className="font-semibold text-yellow-600">⭐ {assignedHospitalData.hospital.rating}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Reviews</p>
                  <p className="font-semibold">{assignedHospitalData.hospital.reviews}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">Tagline</p>
                <p className="text-gray-700">{assignedHospitalData.hospital.tagline}</p>
              </div>
            </div>
          )}

          {/* Stats section (unchanged) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <p className="text-gray-500 text-sm">Total Members Served</p>
              <h2 className="text-3xl font-bold text-blue-600 mt-2">
                {totalMembers}
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <p className="text-gray-500 text-sm">Today's Services</p>
              <h2 className="text-3xl font-bold text-green-600 mt-2">
                {todayServices}
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <p className="text-gray-500 text-sm">Total Discount Given</p>
              <h2 className="text-3xl font-bold text-purple-600 mt-2">
                ₹{totalDiscount.toLocaleString()}
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h2 className="text-3xl font-bold text-orange-600 mt-2">
                ₹{totalRevenue.toLocaleString()}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Member Search */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Search Member</h2>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter Member ID (e.g. GEM-...)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleSearch}
                className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Search
              </button>

              {/* Member Details */}
              {foundPurchase && (
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800">Member Details</h3>

                  <div className="mt-3 space-y-2 text-sm text-gray-600">
                    <p>
                      Name:{" "}
                      <span className="font-medium text-gray-800">
                        {foundPurchase.user?.name || "N/A"}
                      </span>
                    </p>
                    <p>
                      Contact:{" "}
                      <span className="font-medium text-gray-800">
                        {foundPurchase.user?.contact || "N/A"}
                      </span>
                    </p>
                    <p>
                      Member ID:{" "}
                      <span className="font-medium text-gray-800">
                        {foundPurchase.memberId}
                      </span>
                    </p>
                    {/* <p>
                      Phone:{" "}
                      <span className="font-medium text-gray-800">
                        {foundPurchase.user?.phone || "N/A"}
                      </span>
                    </p> */}
                    <p>
                      Plan:{" "}
                      <span className="font-medium text-green-600">
                        {foundPurchase.membership?.name || "N/A"}
                      </span>
                    </p>
                    <p>
                      Plan Price:{" "}
                      <span className="font-medium text-gray-800">
                        ₹{foundPurchase.membership?.price ?? "N/A"}
                      </span>
                    </p>
                    <p>
                      Status:{" "}
                      <span className="font-medium text-green-600">
                        {foundPurchase.status || "Active"}
                      </span>
                    </p>

                    <hr className="my-2" />

                    <p>
                      Sold By:{" "}
                      {foundPurchase?.employeeAssignment?.employee ? (
                        <span className="font-medium text-gray-800">
                          {foundPurchase.employeeAssignment.employee.user.name}
                          {" "}
                          ({foundPurchase.employeeAssignment.employee.user.email})
                        </span>
                      ) : (
                        <span className="text-gray-400">Not Assigned</span>
                      )}
                    </p>

                    <p>
                      Department:{" "}
                      <span className="font-medium text-gray-800">
                        {foundPurchase?.employeeAssignment?.department?.name || "-"}
                      </span>
                    </p>

                    <p>
                      Role:{" "}
                      <span className="font-medium text-gray-800">
                        {foundPurchase?.employeeAssignment?.role?.name || "-"}
                      </span>
                    </p>

                    <p>
                      Location:{" "}
                      <span className="font-medium text-gray-800">
                        {[
                          foundPurchase?.employeeAssignment?.village?.name,
                          foundPurchase?.employeeAssignment?.taluka?.name,
                          foundPurchase?.employeeAssignment?.district?.name,
                          foundPurchase?.employeeAssignment?.state?.name,
                        ]
                          .filter(Boolean)
                          .join(", ")}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={openServiceModal}
                    disabled={!foundPurchase}
                    className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Create Service Entry
                  </button>
                </div>
              )}

              {/* Not found */}
              {!foundPurchase && notFound && (
                <div className="mt-6 bg-red-50 text-red-600 rounded-lg p-4 text-sm">
                  No member found with ID "{searchedMemberId}".
                </div>
              )}
            </div>

            {/* Recent Services (unchanged) */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  Recent Services
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-gray-500">
                      <th className="text-left py-3">Member ID</th>
                      <th className="text-left py-3">Service</th>
                      <th className="text-left py-3">Bill</th>
                      <th className="text-left py-3">Discount</th>
                      <th className="text-left py-3">Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {services?.length > 0 ? (
                      services.map(item => (
                        <tr key={item.id} className="border-b">
                          <td className="py-3">
                            {item.membershipPurchaseId}
                          </td>

                          <td>{item.serviceName}</td>

                          <td>₹{Number(item.actualBillAmount).toLocaleString()}</td>

                          <td className="text-green-600">
                            ₹{Number(item.offerAmount).toLocaleString()}
                          </td>

                          <td>
                            {new Date(item.usedAt).toLocaleDateString("en-IN")}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-6 text-center text-gray-500">
                          No services found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Service Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Create Service Entry</h2>
              <button onClick={closeServiceModal} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              For member <span className="font-medium text-gray-800">{foundPurchase?.memberId}</span>
            </p>

            <form onSubmit={handleCreateService} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Service Name *</label>
                <input
                  type="text"
                  name="serviceName"
                  value={serviceForm.serviceName}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Service Details</label>
                <textarea
                  name="serviceDetails"
                  value={serviceForm.serviceDetails}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Actual Bill (₹) *</label>
                  <input
                    type="number"
                    name="actualBillAmount"
                    value={serviceForm.actualBillAmount}
                    onChange={handleFormChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Offer Amount (₹)</label>
                  <input
                    type="number"
                    name="offerAmount"
                    value={serviceForm.offerAmount}
                    onChange={handleFormChange}
                    min="0"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Final Amount (₹)</label>
                <input
                  type="number"
                  name="finalAmount"
                  value={serviceForm.finalAmount}
                  onChange={handleFormChange}
                  min="0"
                  step="0.01"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Bill (image/PDF)</label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="w-full text-sm"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeServiceModal}
                  disabled={saving}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default HospitalDashboard;