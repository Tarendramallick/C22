"use client"

import type React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import SwingUnderline from "./SwingUnderline"
import SelectUnderline from "./reusableComponents/SelectUnderline"

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
        <form onSubmit={handleSubmit} className="space-y-6 h-[570px] border border-dashed border-[#FE5A1D] px-30 py-20 rounded-[20px]">
            <div className="grid grid-cols-2 border-b border-dashed border-[#FE5A1D] gap-8 mb-16">
                <div>
                    <p className="text-[26px] italic font-bold uppercase tracking-lighter mb-2">DONT GET STUCK WITH BAD MARKETING</p>
                    {/* <h3 className="text-[26px] italic font-black">BAD MARKETING</h3> */}
                </div>
                <div className="relative">
                    <p className="text-[26px] font-normal tracking-wider italic text-right mb-2">Let's get you moving</p>
                    <p className="text-3xl font-bold text-white tracking-wider italic ml-12 -mt-1">FRWD</p>
                    <SelectUnderline className="absolute top-12 overflow-visible left-12" width={90} waves={8} strokeWidth={23}/>
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
          <div className="flex w-full bg-transparent border-b border-dashed border-[#FE5A1D] text-base font-normal italic pb-2 focus:border-[#FE5A1D] ">Desired Service</div>
          <Select
            value={formData.service}
            onValueChange={(value) =>
              setFormData({ ...formData, service: value })
            }
          >
            <SelectTrigger className="relative left-[200px] -top-16 bg-transparent border-0 hover:border-0 text-base italic rounded-none w-[142px] cursor-pointer">
            <SelectValue placeholder="MARKETING" />
          </SelectTrigger>
            <SelectContent
              className="
              absolute
                bg-black
                border-b border-[#FE5A1D]
                rounded-2xl
                p-3
                w-[130px]
                h-[160px]
                -top-10
                text-white
                shadow-xl
              "
            >
              <SelectItem value="MARKETING" className="text-base italic">MARKETING</SelectItem>
              <SelectUnderline className="absolute top-1 overflow-visible left-[9px]" width={95} waves={12} />

              <SelectItem value="WEB_DEVELOPMENT" className="text-base italic leading-none">WEBSITE DEVELOPMENT</SelectItem>
              <SelectUnderline className="absolute top-9 overflow-visible left-[9px]" width={70} waves={8} />
              <SelectUnderline className="absolute top-14 overflow-visible left-[9px]" width={120} waves={14}/>
              <SelectItem value="SEO" className="text-base italic">SEO</SelectItem>
              <SelectUnderline className="absolute top-21 overflow-visible left-[9px]" width={35} waves={4}/>
            </SelectContent>
          </Select>
        </form>
      </div>
    </section>
  )
}
