"use client"
import CardCouponComponent from '@/components/card/coupon-detail/CardCouponComponent'
import { couponData } from '@/components/card/coupon-detail/couponData'
import React from 'react'

// this page is coupons page display all coupons
export default function page() {
  return (
    <div>
      <CardCouponComponent displayCount={couponData.length}/>
    </div>
  )
}
