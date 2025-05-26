import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0AB274] text-white" id="contact">
      <div className="footer-container">
        <div className="footer-headline-container">
          <p className="px-4 py-4 text-9xl font-bold">RK.</p>
        </div>
        <div>
          <div className="footer-contact">
            <div>
              <p className="text-xl">Contact</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>rtkeosung@gmail.com</p>
              <p>+66 883339573</p>
              <Link
                href={"https://linkedin.com/in/ruk-keosung-9834aa207"}
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                href={"https://ruknakub.com/files/QA_Ruk_Keosung_Resume.pdf"}
                target="_blank"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
