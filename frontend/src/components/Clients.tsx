import React from 'react';
import { Star } from 'lucide-react';

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  content,
  name,
  role,
  company,
  image,
  rating,
}: Testimonial) => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-6">{content}</p>
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">
          {role} at {company}
        </p>
      </div>
    </div>
  </div>
);

interface Testimonial {
  content: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content: "Working with John was an absolute pleasure. His technical expertise and attention to detail resulted in a product that exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    content: "John's ability to understand our requirements and translate them into a beautiful, functional website was impressive. Highly recommended!",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
  },
  {
    content: "The attention to detail and professional approach made our collaboration smooth and successful. Would definitely work with John again!",
    name: "Emily Brown",
    role: "Marketing Director",
    company: "Growth Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
];

export default Clients;