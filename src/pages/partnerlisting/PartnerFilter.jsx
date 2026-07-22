import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../reduxStore/slice/partnerFilterSlice'

function PartnerFilter({ setOpenFilter }) {
    const dispatch=useDispatch()

    const handleApply = () => {

        if (setOpenFilter) {
            setOpenFilter(false)
        }
    }

  const { search } = useSelector(
  (state) => state.partnerFilter
);
// setSearch
    return (
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm h-fit sticky top-5">

            {/* Header */}
            <div className="flex items-center justify-between">

                <h2 className="text-xl font-semibold">
                    Filters
                </h2>

                {/* Mobile Close */}
                <button
                    onClick={() => setOpenFilter(false)}
                    className="lg:hidden text-2xl text-gray-500"
                >
                    ×
                </button>
            </div>

            {/* Search */}
            <div className="mt-8">

                <label className="text-sm font-medium text-gray-700">
                    Search Hospital
                </label>

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full mt-3 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary"
                   onChange={(e) => dispatch(setSearch(e.target.value))}
                />
            </div>

            {/* City */}
            {/* <div className="mt-8">

                <label className="text-sm font-medium text-gray-700">
                    City
                </label>

                <select className="w-full mt-3 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary">

                    <option>All Cities</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                </select>
            </div> */}

            {/* Speciality */}
            {/* <div className="mt-8">

                <label className="text-sm font-medium text-gray-700">
                    Speciality
                </label>

                <div className="space-y-4 mt-4">

                    <label className="flex items-center gap-3 text-sm text-gray-600">
                        <input type="checkbox" />
                        Cardiology
                    </label>

                    <label className="flex items-center gap-3 text-sm text-gray-600">
                        <input type="checkbox" />
                        Neurology
                    </label>

                    <label className="flex items-center gap-3 text-sm text-gray-600">
                        <input type="checkbox" />
                        Orthopedic
                    </label>

                    <label className="flex items-center gap-3 text-sm text-gray-600">
                        <input type="checkbox" />
                        Cancer Care
                    </label>
                </div>
            </div> */}

            {/* Discount */}
            {/* <div className="mt-8">

                <label className="text-sm font-medium text-gray-700">
                    Minimum Discount
                </label>

                <input
                    type="range"
                    min="10"
                    max="60"
                    className="w-full mt-4 accent-primary"
                />

                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>10%</span>
                    <span>60%</span>
                </div>
            </div> */}

            {/* Buttons */}
            {/* <div className="flex gap-3 mt-10">

                <button className="flex-1 border border-gray-200 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition">
                    Reset
                </button>

                <button
                    onClick={handleApply}
                    className="flex-1 bg-primary text-white py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
                >
                    Apply
                </button>
            </div> */}
        </div>
    )
}

export default PartnerFilter