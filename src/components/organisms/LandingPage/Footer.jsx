import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-bold mb-3 text-white">FlowChat</h4>
          <p className="text-sm">The collaboration hub for modern teams.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-white">Product</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-white">Company</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-white">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} FlowChat. All rights reserved.
      </div>
    </footer>
  );
}
