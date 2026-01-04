"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "MARKETING",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-black h-screen px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 border border-dashed border-[#FE5A1D] px-30 py-20 rounded-[20px]">
            <div className="grid grid-cols-2 border-b border-dashed border-[#FE5A1D] gap-8 mb-16">
                <div>
                    <p className="text-[26px] italic font-bold uppercase tracking-wider mb-2">DONT GET STUCK WITH BAD MARKETING</p>
                    {/* <h3 className="text-[26px] italic font-black">BAD MARKETING</h3> */}
                </div>
                <div>
                    <p className="text-[26px] font-normal tracking-wider italic text-right mb-2">Let's get you moving</p>
                    <span className="text-3xl font-black text-[#FE5A1D]">
                        <span className="inline-block ml-12 align-middle">
                            <Image
                            src="/FWRD.png"
                            alt="FWRD"
                            width={80}
                            height={30}
                            className="object-contain"
                            priority
                            />
                        </span>
                    </span>
                </div>
            </div>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME*"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-dashed border-[#FE5A1D] text-base font-normal placeholder-white italic pb-2 focus:outline-none focus:border-[#FE5A1D] transition"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME*"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-dashed border-[#FE5A1D] text-base font-normal placeholder-white italic pb-2 focus:outline-none focus:border-[#FE5A1D] transition"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL NAME*"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-dashed border-[#FE5A1D] text-base font-normal placeholder-white italic pb-2 focus:outline-none focus:border-[#FE5A1D] transition"
              required
            />
          </div>

          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-dashed border-[#FE5A1D] text-base font-normal italic pb-2 focus:outline-none focus:border-[#FE5A1D] transition appearance-none cursor-pointer"
            >
              <option value="MARKETING" className="bg-black">
                MARKETING
              </option>
              <option value="WEB_DEVELOPMENT" className="bg-black">
                WEB DEVELOPMENT
              </option>
              <option value="SEO" className="bg-black">
                SEO
              </option>
            </select>
            <ChevronDown className="absolute right-0 bottom-2 w-4 h-4 pointer-events-none text-gray-500" />
          </div>

          <button
            type="submit"
            className="w-[30%] bg-[#FE5A1D] hover:bg-orange-600 text-black font-black py-3 rounded transition mt-8"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  )
}
