import { ScrollShadow } from '@nextui-org/react';
import React from 'react';
import 'aos/dist/aos.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

('use  client');

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Policy Page',
  description: 'This is a Policy Page',
};

export default function PolicyPage() {
  return (
    <ScrollShadow hideScrollBar size={70} className="mt-10 h-[750px] w-full">
      <p className="text-2xl font-bold">Privacy Policy</p>
      <ul className="mx-8 list-disc">
        <li className="mt-2">
          We value your privacy and are committed to protecting your personal
          information. This policy explains what data we collect, how we use it,
          and your rights regarding your information.
        </li>
        <li className="mt-2">
          We collect personal information when you register on our site, place
          an order, subscribe to our newsletter, or fill out a form. The data
          collected includes your name, email address, mailing address, phone
          number, and payment information.
        </li>
        <li className="mt-2">
          The information we collect is used to process transactions, improve
          customer service, and send periodic emails for order updates and
          promotional offers.
        </li>
        <li className="mt-2">
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties, except as necessary to
          fulfill orders or comply with the law.
        </li>
        <li className="mt-2">
          Our website uses cookies to enhance your experience and gather general
          visitor information. You can choose to disable cookies through your
          browser settings.
        </li>
        <li className="mt-2">
          You have the right to access, rectify, or delete your personal data.
          For any privacy-related concerns, please contact us at
          privacy@example.com.
        </li>
      </ul>

      {/* Terms and Conditions section */}
      <div className="mt-12">
        <p className="text-2xl font-bold">Terms and Conditions</p>
        <ul className="mx-8 list-disc">
          <li className="mt-2">
            By using our website, you agree to comply with and be bound by the
            following terms and conditions. Please review these terms carefully.
          </li>
          <li className="mt-2">
            You agree to use our site for lawful purposes only and in a manner
            that does not infringe the rights of or restrict the use and
            enjoyment of this site by any third party.
          </li>
          <li className="mt-2">
            All content included on this site, such as text, graphics, logos,
            and images, is the property of our company or its content suppliers
            and protected by intellectual property laws.
          </li>
          <li className="mt-2">
            We are not responsible for any damages arising from the use of this
            site or the products sold on it. Our liability is limited to the
            maximum extent permitted by law.
          </li>
          <li className="mt-2">
            These terms are governed by and construed in accordance with the
            laws of [Your Country/State], and you irrevocably submit to the
            exclusive jurisdiction of the courts in that location.
          </li>
        </ul>
      </div>

      {/* Shipping Policy section */}
      <div className="mt-12">
        <p className="text-2xl font-bold">Shipping Policy</p>
        <ul className="mx-8 list-disc">
          <li className="mt-2">
            We offer standard, expedited, and express shipping options. The
            available methods will be displayed during checkout.
          </li>
          <li className="mt-2">
            Estimated delivery times are as follows: Standard Shipping (5-7
            business days), Expedited Shipping (2-4 business days), Express
            Shipping (1-2 business days).
          </li>
          <li className="mt-2">
            Shipping costs are calculated based on the weight and dimensions of
            the order, as well as the selected shipping method. The total cost
            will be displayed at checkout.
          </li>
          <li className="mt-2">
            We ship internationally to selected countries. Additional fees and
            longer delivery times may apply. Customers are responsible for any
            customs duties or taxes.
          </li>
          <li className="mt-2">
            Once your order is shipped, you will receive a tracking number via
            email. You can use this number to track your order status on our
            website or the carriers website.
          </li>
        </ul>
      </div>

      {/* Return and Refund Policy section */}
      <div className="mt-12">
        <p className="text-2xl font-bold">Return and Refund Policy</p>
        <ul className="mx-8 list-disc">
          <li className="mt-2">
            Items must be returned within 30 days of receipt, unused, and in
            their original packaging. Certain items, such as personalized
            products, are not eligible for return.
          </li>
          <li className="mt-2">
            To initiate a return, please contact our customer service at
            returns@example.com with your order number and reason for return. We
            will provide you with a return authorization and instructions.
          </li>
          <li className="mt-2">
            Once we receive your return, we will inspect it and notify you of
            the approval or rejection of your refund. Approved refunds will be
            processed within 7 business days to your original payment method.
          </li>
          <li className="mt-2">
            We offer exchanges for defective or damaged items. If you need to
            exchange an item, please contact us with your order details.
          </li>
          <li className="mt-2">
            If you have any questions about our return and refund policy, please
            contact us at returns@example.com or call us at (123) 456-7890.
          </li>
        </ul>
      </div>
    </ScrollShadow>
  );
}
