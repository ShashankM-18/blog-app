const FooterInfo = () => {
  return (
    <div className="mt-20 lg:mx-48 mx-8 flex lg:flex-row flex-col gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <p className="text-[#252B42] text-base font-bold">Company Info</p>
        <p className="text-[#737373] text-sm font-bold">About Us</p>
        <p className="text-[#737373] text-sm font-bold">Carrier</p>
        <p className="text-[#737373] text-sm font-bold">We are hiring</p>
        <p className="text-[#737373] text-sm font-bold">Blog</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[#252B42] text-base font-bold">Legal</p>
        <p className="text-[#737373] text-sm font-bold">About Us</p>
        <p className="text-[#737373] text-sm font-bold">Carrier</p>
        <p className="text-[#737373] text-sm font-bold">We are hiring</p>
        <p className="text-[#737373] text-sm font-bold">Blog</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[#252B42] text-base font-bold">Features</p>
        <p className="text-[#737373] text-sm font-bold">Business Marketing</p>
        <p className="text-[#737373] text-sm font-bold">User Analytic</p>
        <p className="text-[#737373] text-sm font-bold">Live Chat</p>
        <p className="text-[#737373] text-sm font-bold">Unlimited Support</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[#252B42] text-base font-bold">Resources</p>
        <p className="text-[#737373] text-sm font-bold">IOS & Android</p>
        <p className="text-[#737373] text-sm font-bold">Watch a Demo</p>
        <p className="text-[#737373] text-sm font-bold">Customers</p>
        <p className="text-[#737373] text-sm font-bold">API</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[#252B42] text-base font-bold">Get In Touch</p>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 lg:p-4 p-2 rounded-md"
          />
          <button className="bg-[#23A6F0] lg:p-4 p-2 text-white rounded-md hover:bg-sky-600">
            Subscribe
          </button>
        </div>
        <p className="text-[#737373] text-sm font-bold">
          Lore imp sum dolor Amit
        </p>
      </div>
    </div>
  );
};

export default FooterInfo;
