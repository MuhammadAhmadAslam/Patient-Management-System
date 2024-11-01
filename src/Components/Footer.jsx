import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer 
      className="relative w-full py-12 bg-cover bg-center bg-no-repeat bg-[url(https://preview.colorlib.com/theme/mediplus/images/footer-bg.jpg)]"
      style={{
        backgroundImage: 'url("https://preview.colorlib.com/theme/mediplus/images/footer-bg.jpg")',
        opacity: '0.8',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mediplus Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Mediplus</h2>
            <p className="text-muted-foreground mb-4">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary hover:text-primary/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Departments Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Departments</h2>
            <ul className="space-y-2">
              {['Neurology', 'Ophthalmology', 'Nuclear Magnetic', 'Surgical', 'Cardiology', 'Dental'].map((dept) => (
                <li key={dept}>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    → {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Services Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              {['Emergency Services', 'Qualified Doctors', 'Outdoors Checkup', '24 Hours Services'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    → {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Have a Questions?</h2>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              <p>
                <Link href="tel:+23923929210" className="hover:text-primary">
                  +2 392 3929 210
                </Link>
              </p>
              <p>
                <Link href="mailto:info@yourdomain.com" className="hover:text-primary">
                  info@yourdomain.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
          <p>
            Copyright ©2024 All rights reserved | This Project is made with ♥ by{' '}
            <Link href="https://github.com/MuhammadAhmadAslam" className="text-primary hover:text-primary/80">
              Muhammad Ahmad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}