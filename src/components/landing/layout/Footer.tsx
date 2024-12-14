import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-background py-8 text-primary-foreground dark:text-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              alt="CodeFast Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">CodeBoost</h3>
            <p className="text-base-content/80">
              Create your project in minutes, not months.
            </p>
            <p className="text-base-content/80 mt-4">
              Build by Thomy with 🐸
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Course
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Affiliate (Earn up to $150)
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Terms of services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-2">By the maker</h3>
            <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Newsletter for makers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                ByeDispute
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                IndiePage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                ZenVoice
              </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-base-300" />
        <div className="flex justify-between items-center">
          <div className="text-base-content/80">
            Built with{" "}
            <a href="#" className="flex items-center">
              <Image
                src="/shipfast-logo.svg"
                alt="ShipFast Logo"
                width={100}
                height={30}
                className="mr-2"
              />
              ShipFast
            </a>
          </div>
          <div className="text-base-content/80">
            Copyright &copy; {new Date().getFullYear()} - All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
