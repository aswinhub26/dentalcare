'use client';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const services = ['Aligners & Braces','Advanced Root Canal Treatment','Advanced Implant & Zirconia','Conscious Sedation','Advanced Cleaning & Air Polishing','Teeth Whitening','Laser Dentistry','Deep Canal Treatment','Smile Designing','Dentures & Prosthesis','BPS Complete Dentures','Wisdom Tooth Extraction','Veneers'];
const trust = ['Advanced Dental Technology','Painless Treatment','Hygienic Environment','Affordable Care','Smile Transformation Experts'];
const gallery = [
  { src: '/images/exterior.svg', title: 'Clinic Exterior' },{ src: '/images/interior-1.svg', title: 'Interior Room' },{ src: '/images/interior-2.svg', title: 'Dental Chair Setup' },{ src: '/images/equipment.svg', title: 'Equipment' },{ src: '/images/opening-1.svg', title: 'Opening Ceremony' },{ src: '/images/opening-2.svg', title: 'Opening Day Crowd' }
];

export default function Home() {
  const [popup, setPopup] = useState(false); const [lightbox, setLightbox] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: services[0], date: '', message: '' });
  useEffect(() => { const t = setTimeout(() => setPopup(true), 5000); return () => clearTimeout(t); }, []);
  const wa = useMemo(() => `https://wa.me/918825719098?text=${encodeURIComponent('Hi Chandru Dental Clinic, I need an appointment.')}`, []);

  return <main>
    <header className="fixed top-0 z-50 w-full bg-white/75 backdrop-blur-xl border-b border-blue-100">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3"><img src="/images/logo.svg" className="w-11 h-11" alt="logo"/><div><p className="font-black text-royal leading-4">CHANDRU DENTAL CLINIC</p><p className="text-[11px] text-slate-500">ADVANCED DENTAL CENTER</p></div></div>
        <div className="hidden md:flex gap-3 text-sm"><a href="#services">Services</a><a href="#doctors">Doctors</a><a href="#gallery">Gallery</a><a href="#appointment">Appointment</a></div>
        <button onClick={()=>setPopup(true)} className="rounded-full px-5 py-2 bg-royal text-white">Book Appointment</button>
      </nav>
    </header>

    <section className="min-h-screen pt-28 bg-[url('/images/exterior.svg')] bg-cover bg-center relative text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#072a73]/90 via-[#0b3f97]/75 to-[#1461c8]/45" />
      <div className="relative mx-auto max-w-7xl px-4 py-24">
        <p className="uppercase tracking-[0.25em] text-gold text-xs">Luxury Dental Excellence</p>
        <h1 className="text-5xl md:text-7xl font-black mt-2">Chandru Dental Clinic</h1>
        <h2 className="text-2xl md:text-3xl font-light">Advanced Dental Center</h2>
        <p className="mt-4 text-xl">“We Bring Your Healthy Smiles”</p>
        <motion.div animate={{x:[0,8,0]}} transition={{repeat:Infinity,duration:2}} className="mt-4 text-4xl">🦷</motion.div>
        <div className="flex flex-wrap gap-3 mt-7"><button onClick={()=>setPopup(true)} className="px-6 py-3 rounded-full bg-gold text-slate-900 font-bold">Book Appointment</button><a href="tel:+918825719098" className="px-6 py-3 rounded-full border">Call Now</a><a href={wa} className="px-6 py-3 rounded-full bg-green-500">WhatsApp Now</a></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl p-4 grid md:grid-cols-2 gap-4 -mt-14"><div className="glass rounded-3xl p-6"><h3 className="text-royal text-2xl font-bold">Clinic Address</h3><p className="mt-2">194/1, P.H Road, Ondikuppam Village, Manavalanagar Post, Thiruvallur Taluk, Thiruvallur, Tamil Nadu – 602002</p><p className="mt-2">+91 88257 19098 | +91 98947 01374</p></div><div className="glass rounded-3xl p-6"><h3 className="text-royal text-2xl font-bold">Business Hours</h3><p className="mt-2">Morning: 10:00 AM – 1:00 PM</p><p>Evening: 5:30 PM – 8:30 PM</p><iframe className="w-full h-40 rounded-xl mt-3" loading="lazy" src="https://maps.google.com/maps?q=Thiruvallur&t=&z=13&ie=UTF8&iwloc=&output=embed"/></div></section>

    <section className="mx-auto max-w-7xl p-4" id="services"><h2 className="text-3xl font-bold text-royal mb-4">Advanced Services</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{services.map(s=><div key={s} className="glass rounded-2xl p-4">🦷 {s}</div>)}</div></section>
    <section className="mx-auto max-w-7xl p-4"><h2 className="text-3xl font-bold text-royal mb-4">Why Patients Trust Us</h2><div className="grid md:grid-cols-5 gap-3">{trust.map(t=><div key={t} className="rounded-2xl bg-royal text-white p-4 text-center">{t}</div>)}</div></section>
    <section className="mx-auto max-w-7xl p-4" id="doctors"><h2 className="text-3xl font-bold text-royal mb-4">Doctors</h2><div className="grid md:grid-cols-2 gap-4">{[['Dr. Aarthi P.S','B.D.S, F.A.C.D','Dental Surgeon','Experienced and patient-friendly dentist specializing in painless treatments, root canal procedures, and smile care.'],['Dr. Hemachandran R','B.D.S','Dental Surgeon','Skilled in general and advanced dental procedures with focus on hygiene, precision, and modern techniques.']].map(d=><div className="glass rounded-3xl p-6" key={d[0]}><div className="w-20 h-20 rounded-full bg-blue-100 mb-4"/><h3 className="text-2xl font-bold">{d[0]}</h3><p className="text-royal">{d[1]} • {d[2]}</p><p className="mt-2 text-sm">{d[3]}</p></div>)}</div></section>
    <section className="mx-auto max-w-7xl p-4" id="gallery"><h2 className="text-3xl font-bold text-royal mb-4">Gallery</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{gallery.map(g=><button key={g.title} onClick={()=>setLightbox(g.src)} className="h-56 overflow-hidden rounded-2xl"><img src={g.src} alt={g.title} className="h-full w-full object-cover hover:scale-110 transition"/></button>)}</div></section>

    <section className="mx-auto max-w-7xl p-4"><div className="glass rounded-3xl p-6"><h2 className="text-3xl text-royal font-bold">Google Reviews (5.0 ⭐)</h2><div className="grid md:grid-cols-3 gap-4 mt-4"><div className="bg-white p-4 rounded-2xl">NEELESH R ⭐⭐⭐⭐⭐<p className="text-sm mt-2">I recently visited Chandru Dental Clinic, and I must say—I was truly impressed...</p></div><div className="bg-white p-4 rounded-2xl">dilli babu ⭐⭐⭐⭐⭐<p className="text-sm mt-2">Nice and Good 👍</p></div><div className="bg-white p-4 rounded-2xl">Jeeva Rajendran ⭐⭐⭐⭐⭐<p className="text-sm mt-2">I visited for an RCT, and Dr. Aarthi was very friendly...</p></div></div><a href="https://share.google/gHY9JYOlksw6ednSv" className="inline-block mt-4 px-5 py-2 rounded-full bg-royal text-white">View More Reviews</a></div></section>

    <section className="mx-auto max-w-7xl p-4" id="appointment"><form onSubmit={(e)=>{e.preventDefault(); if(!form.name||!form.phone||!form.date)return; setSubmitted(true); setTimeout(()=>setSubmitted(false),2400);}} className="glass rounded-3xl p-6"><h2 className="text-3xl font-bold text-royal">Book Appointment</h2><div className="grid md:grid-cols-2 gap-3 mt-4"><input className="rounded-xl p-3 border" placeholder="Name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input className="rounded-xl p-3 border" placeholder="Phone" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/><select className="rounded-xl p-3 border" value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>{services.map(s=><option key={s}>{s}</option>)}</select><input className="rounded-xl p-3 border" type="date" required value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/><input className="rounded-xl p-3 border md:col-span-2" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></div><button className="mt-4 px-7 py-3 rounded-full bg-royal text-white font-bold">Submit Appointment 🦷</button><a href={wa} className="ml-3 text-royal">WhatsApp fallback</a>{submitted && <motion.p initial={{opacity:0, y:14}} animate={{opacity:1,y:0}} className="mt-4 p-3 rounded-xl bg-green-100 text-green-800">Old teeth 🦷 ➜ New smile 😁 Request submitted!</motion.p>}</form></section>
    <a href={wa} className="fixed right-4 bottom-4 z-50 rounded-full px-4 py-3 bg-green-500 text-white shadow-luxe">WhatsApp</a>

    <AnimatePresence>{popup && <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><motion.div initial={{scale:.85, opacity:0}} animate={{scale:1,opacity:1}} className="bg-white rounded-3xl p-6 max-w-md w-full"><h3 className="font-black text-2xl text-royal">Book an Appointment in 30 seconds</h3><p className="mt-2">Premium painless treatment awaits.</p><div className="mt-4 flex gap-2"><button className="px-4 py-2 rounded-full bg-royal text-white" onClick={()=>{setPopup(false); document.getElementById('appointment')?.scrollIntoView({behavior:'smooth'});}}>Book now</button><button className="px-4 py-2 rounded-full border" onClick={()=>setPopup(false)}>Later</button></div></motion.div></motion.div>}</AnimatePresence>
    <AnimatePresence>{lightbox && <motion.div onClick={()=>setLightbox(null)} className="fixed inset-0 z-[70] bg-black/90 grid place-items-center p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><img src={lightbox} alt="preview" className="max-h-[90vh] rounded-2xl"/></motion.div>}</AnimatePresence>
  </main>;
}
