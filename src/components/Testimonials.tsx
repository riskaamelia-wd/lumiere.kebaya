import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Citra Dewi",
    image:
      "https://images.unsplash.com/photo-1644102586005-191042134992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NzU1NTkzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    text: "Kebaya yang saya sewa sangat indah dan berkualitas. Saya merasa sangat percaya diri saat tampil dengan kebaya dari Lumière!",
  },
  {
    id: 2,
    name: "Nurul Kamilah",
    image:
      "https://images.unsplash.com/photo-1643908849639-2d107f9bc009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWphYiUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzU1NTkzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    text: "Pelayanan yang ramah dan profesional. Kebaya-nya sangat cantik dan fitting-nya pas. Terima kasih Lumière!",
  },
  {
    id: 3,
    name: "Dewi Kartika",
    image:
      "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU1MDgxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    text: "Desainnya elegan dan detail sulaman sangat rapi. Saya akan merekomendasikan Lumière kepada teman-teman saya!",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#efe3cb]">
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3d1a1a 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <h2 className="mb-8 text-center font-serif text-4xl text-[#2c1417]">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full border-4 border-[#d8bc77]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mb-2 flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#c9a961] text-[#c9a961]"
                  />
                ))}
              </div>

              <p className="mb-1 text-sm italic leading-relaxed text-[#5a3939]">
                "{testimonial.text}"
              </p>

              <p className="text-sm text-[#2c1417]">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
