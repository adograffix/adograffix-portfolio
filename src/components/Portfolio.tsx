import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

const projects = [
  // Branding
  { id: 1, title: 'Chin Chin & Peanuts', category: 'Branding', image: 'thumbnails/Branding/chin chinAND PEANUTS.jpg', fullImage: 'images/Branding/chin chinAND PEANUTS.jpg', description: 'Complete branding and packaging design.', year: '2024', role: 'Lead Designer' },
  { id: 2, title: 'Lizzy Collection', category: 'Branding', image: 'thumbnails/Branding/lizzy.jpg', fullImage: 'images/Branding/lizzy.jpg', description: 'Elegant brand identity design.', year: '2023', role: 'Brand Designer' },
  { id: 3, title: 'Vicky Identity', category: 'Branding', image: 'thumbnails/Branding/vicky.jpg', fullImage: 'images/Branding/vicky.jpg', description: 'Modern personal branding project.', year: '2024', role: 'Lead Designer' },
  { id: 4, title: 'HMM Graphix', category: 'Branding', image: 'thumbnails/Branding/HMM GRAPHIX.jpg', fullImage: 'images/Branding/HMM GRAPHIX.jpg', description: 'Corporate identity and stationery design.', year: '2024', role: 'Brand Designer' },
  { id: 5, title: 'Lizzy Dan 125', category: 'Branding', image: 'thumbnails/Branding/lizzy dan 125.jpg', fullImage: 'images/Branding/lizzy dan 125.jpg', description: 'Special anniversary branding.', year: '2023', role: 'Lead Designer' },
  { id: 6, title: 'Ado 15 Branding', category: 'Branding', image: 'thumbnails/Branding/ado 15.png', fullImage: 'images/Branding/ado 15.png', description: 'Visual identity and logo design.', year: '2024', role: 'Designer' },
  { id: 7, title: 'Brand Concept', category: 'Branding', image: 'thumbnails/Branding/20260402_065441.jpg', fullImage: 'images/Branding/20260402_065441.jpg', description: 'Innovative brand concept and strategy.', year: '2024', role: 'Creative Director' },

  // Graphic Design
  { id: 8, title: 'Global Child March', category: 'Graphic Design', image: 'thumbnails/graphic design/global child march.jpg', fullImage: 'images/graphic design/global child march.jpg', description: 'Impactful poster and social media design.', year: '2024', role: 'Graphic Designer' },
  { id: 9, title: 'Event Banner', category: 'Graphic Design', image: 'thumbnails/graphic design/banner 11.jpg', fullImage: 'images/graphic design/banner 11.jpg', description: 'Large-scale banner design.', year: '2023', role: 'Graphic Designer' },
  { id: 10, title: '2Shot Media', category: 'Graphic Design', image: 'thumbnails/graphic design/2shot.jpg', fullImage: 'images/graphic design/2shot.jpg', description: 'Dynamic graphic elements for media.', year: '2024', role: 'Lead Designer' },
  { id: 11, title: 'Prophetic Walk', category: 'Graphic Design', image: 'thumbnails/graphic design/prophetic prayer walk.jpg', fullImage: 'images/graphic design/prophetic prayer walk.jpg', description: 'Community event poster graphics.', year: '2024', role: 'Graphic Designer' },
  { id: 12, title: 'Peter Ogoh Design', category: 'Graphic Design', image: 'thumbnails/graphic design/perter ogoh.jpg', fullImage: 'images/graphic design/perter ogoh.jpg', description: 'Custom digital art composition.', year: '2023', role: 'Digital Artist' },
  { id: 13, title: 'Men 12 Series', category: 'Graphic Design', image: 'thumbnails/graphic design/men 12.jpg', fullImage: 'images/graphic design/men 12.jpg', description: 'Editorial design and illustration.', year: '2024', role: 'Graphic Designer' },
  { id: 14, title: 'Corper Series', category: 'Graphic Design', image: 'thumbnails/graphic design/corper2.jpg', fullImage: 'images/graphic design/corper2.jpg', description: 'Creative orientation materials.', year: '2024', role: 'Graphic Designer' },
  { id: 15, title: 'Ice Film Identity', category: 'Graphic Design', image: 'thumbnails/graphic design/ice film.jpg', fullImage: 'images/graphic design/ice film.jpg', description: 'Visual identity for film production.', year: '2024', role: 'Brand Designer' },
  { id: 16, title: 'Social Media Kit', category: 'Graphic Design', image: 'thumbnails/graphic design/youtube 2.jpg', fullImage: 'images/graphic design/youtube 2.jpg', description: 'Digital marketing and social assets.', year: '2024', role: 'Designer' },
  { id: 17, title: 'Master Composition', category: 'Graphic Design', image: 'thumbnails/graphic design/Untitled-1.jpg', fullImage: 'images/graphic design/Untitled-1.jpg', description: 'Advanced graphic layout and composition.', year: '2024', role: 'Lead Designer' },
  { id: 18, title: 'Promotional Flyer', category: 'Graphic Design', image: 'thumbnails/graphic design/ljjj.jpg', fullImage: 'images/graphic design/ljjj.jpg', description: 'High-impact promotional print material.', year: '2023', role: 'Designer' },
  { id: 19, title: 'Urban Graphic', category: 'Graphic Design', image: 'thumbnails/graphic design/IMG_20250905_225430.jpg', fullImage: 'images/graphic design/IMG_20250905_225430.jpg', description: 'Urban-themed graphic design project.', year: '2024', role: 'Designer' },
  { id: 20, title: 'Visual Concept', category: 'Graphic Design', image: 'thumbnails/graphic design/66666.jpg', fullImage: 'images/graphic design/66666.jpg', description: 'Bold visual storytelling concept.', year: '2023', role: 'Designer' },
  { id: 21, title: 'Adanu Project', category: 'Graphic Design', image: 'thumbnails/graphic design/adanu1.jpg', fullImage: 'images/graphic design/adanu1.jpg', description: 'Complete graphic design package.', year: '2024', role: 'Lead Designer' },
  { id: 22, title: 'Ado Graphic 12', category: 'Graphic Design', image: 'thumbnails/graphic design/ado12.jpg', fullImage: 'images/graphic design/ado12.jpg', description: 'Corporate graphic design elements.', year: '2024', role: 'Designer' },
  { id: 23, title: 'Ado Concept', category: 'Graphic Design', image: 'thumbnails/graphic design/adoc.jpg', fullImage: 'images/graphic design/adoc.jpg', description: 'Conceptual visual design.', year: '2023', role: 'Designer' },
  { id: 24, title: 'APM Series', category: 'Graphic Design', image: 'thumbnails/graphic design/apm 12.jpg', fullImage: 'images/graphic design/apm 12.jpg', description: 'Identity and graphic elements.', year: '2024', role: 'Designer' },
  { id: 25, title: 'Graphic Layout', category: 'Graphic Design', image: 'thumbnails/graphic design/ado 1223.jpg', fullImage: 'images/graphic design/ado 1223.jpg', description: 'Modern layout and typography.', year: '2024', role: 'Designer' },
  { id: 26, title: 'Digital Asset', category: 'Graphic Design', image: 'thumbnails/graphic design/20260112_172405.png', fullImage: 'images/graphic design/20260112_172405.png', description: 'Custom digital illustration.', year: '2024', role: 'Designer' },
  { id: 54, title: 'Graphic Showcase 12', category: 'Graphic Design', image: 'thumbnails/graphic design/IMG_20250610_000403.jpg.jpeg', fullImage: 'images/graphic design/IMG_20250610_000403.jpg.jpeg', description: 'Innovative visual storytelling and composition.', year: '2024', role: 'Designer' },

  // Photography
  { id: 27, title: 'Portrait Session', category: 'Photography', image: 'thumbnails/Photography/DSC_0910.JPG', fullImage: 'images/Photography/DSC_0910.JPG', description: 'Professional outdoor portrait photography.', year: '2024', role: 'Photographer' },
  { id: 28, title: 'Event Coverage', category: 'Photography', image: 'thumbnails/Photography/DSC_0937.JPG', fullImage: 'images/Photography/DSC_0937.JPG', description: 'Corporate seminar photography.', year: '2023', role: 'Photographer' },
  { id: 29, title: 'Candid Moments', category: 'Photography', image: 'thumbnails/Photography/DSC_1027.JPG', fullImage: 'images/Photography/DSC_1027.JPG', description: 'Street photography capturing life.', year: '2024', role: 'Photographer' },
  { id: 30, title: 'Anita Portraits', category: 'Photography', image: 'thumbnails/Photography/anita.jpg', fullImage: 'images/Photography/anita.jpg', description: 'Studio portrait photography.', year: '2024', role: 'Photographer' },
  { id: 31, title: 'Action Shots', category: 'Photography', image: 'thumbnails/Photography/Cameraman in action at night event.png', fullImage: 'images/Photography/Cameraman in action at night event.png', description: 'Behind the scenes coverage.', year: '2023', role: 'Photographer' },
  { id: 32, title: 'Studio Session', category: 'Photography', image: 'thumbnails/Photography/DSC_1386.JPG', fullImage: 'images/Photography/DSC_1386.JPG', description: 'High-end commercial photography.', year: '2024', role: 'Photographer' },
  { id: 33, title: 'Urban Portrait', category: 'Photography', image: 'thumbnails/Photography/3PL_6787.JPG', fullImage: 'images/Photography/3PL_6787.JPG', description: 'High-contrast urban portrait.', year: '2024', role: 'Photographer' },
  { id: 34, title: 'Event Highlights', category: 'Photography', image: 'thumbnails/Photography/DSC_0714.JPG', fullImage: 'images/Photography/DSC_0714.JPG', description: 'Dynamic event capture.', year: '2024', role: 'Photographer' },
  { id: 35, title: 'Natural Light', category: 'Photography', image: 'thumbnails/Photography/IMG_20250615_183308.jpg.jpeg', fullImage: 'images/Photography/IMG_20250615_183308.jpg.jpeg', description: 'Outdoor light and texture study.', year: '2024', role: 'Photographer' },
  { id: 36, title: 'Studio Capture', category: 'Photography', image: 'thumbnails/Photography/3PL_6788.JPG', fullImage: 'images/Photography/3PL_6788.JPG', description: 'Refined studio photography.', year: '2024', role: 'Photographer' },
  { id: 37, title: 'Artistic Portrait', category: 'Photography', image: 'thumbnails/Photography/DSC_0409.JPG', fullImage: 'images/Photography/DSC_0409.JPG', description: 'Artsy and creative portraiture.', year: '2023', role: 'Photographer' },
  { id: 38, title: 'Atmospheric Shot', category: 'Photography', image: 'thumbnails/Photography/DSC_1293.JPG', fullImage: 'images/Photography/DSC_1293.JPG', description: 'Mood-focused photography.', year: '2024', role: 'Photographer' },
  { id: 39, title: 'Special Event', category: 'Photography', image: 'thumbnails/Photography/DSC_9959.JPG.jpeg', fullImage: 'images/Photography/DSC_9959.JPG.jpeg', description: 'Memorable event photography.', year: '2024', role: 'Photographer' },
  { id: 40, title: 'Candid Street', category: 'Photography', image: 'thumbnails/Photography/DSC_2547.JPG.jpeg', fullImage: 'images/Photography/DSC_2547.JPG.jpeg', description: 'Authentic street moments.', year: '2024', role: 'Photographer' },
  { id: 41, title: 'Ken Portrait', category: 'Photography', image: 'thumbnails/Photography/ken.jpg', fullImage: 'images/Photography/ken.jpg', description: 'Personalized portrait session.', year: '2023', role: 'Photographer' },
  { id: 42, title: 'Valentine Series', category: 'Photography', image: 'thumbnails/Photography/valentine.jpg', fullImage: 'images/Photography/valentine.jpg', description: 'Themed photography series.', year: '2024', role: 'Photographer' },
  { id: 43, title: 'Ado Love', category: 'Photography', image: 'thumbnails/Photography/ado love.png', fullImage: 'images/Photography/ado love.png', description: 'Creative themed photography.', year: '2024', role: 'Photographer' },
  { id: 44, title: 'Professional Shoot', category: 'Photography', image: 'thumbnails/Photography/3PL_6784-Recovered.jpg', fullImage: 'images/Photography/3PL_6784-Recovered.jpg', description: 'High-quality commercial shoot.', year: '2024', role: 'Photographer' },
  { id: 45, title: 'Golden Hour', category: 'Photography', image: 'thumbnails/Photography/_9160.jpg.jpeg', fullImage: 'images/Photography/_9160.jpg.jpeg', description: 'Stunning golden hour capture.', year: '2024', role: 'Photographer' },
  { id: 46, title: 'Ado Portrait', category: 'Photography', image: 'thumbnails/Photography/ado.jpg', fullImage: 'images/Photography/ado.jpg', description: 'Classic portraiture.', year: '2024', role: 'Photographer' },
  { id: 47, title: 'Social Portrait', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578605215219200.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17578605215219200.jpg.jpeg', description: 'Engaging social media portrait.', year: '2024', role: 'Photographer' },

  // Print
  { id: 48, title: 'Ado Love Print', category: 'Print', image: 'thumbnails/Print/ado love 50.jpg', fullImage: 'images/Print/ado love 50.jpg', description: 'High-quality commemorative print.', year: '2024', role: 'Print Designer' },
  { id: 49, title: 'Bliss Marketing', category: 'Print', image: 'thumbnails/Print/bliss.jpg', fullImage: 'images/Print/bliss.jpg', description: 'Marketing flyers and brochures.', year: '2023', role: 'Graphic Designer' },
  { id: 50, title: 'Kasuwa Marketplace', category: 'Print', image: 'thumbnails/Print/kasuwa.jpg', fullImage: 'images/Print/kasuwa.jpg', description: 'Marketplace signage design.', year: '2024', role: 'Print Designer' },
  { id: 51, title: 'Samson Birthday', category: 'Print', image: 'thumbnails/Print/samson adoche birthday2 copy-01.jpeg', fullImage: 'images/Print/samson adoche birthday2 copy-01.jpeg', description: 'Custom birthday event branding.', year: '2024', role: 'Print Designer' },
  { id: 52, title: 'Sale Promotions', category: 'Print', image: 'thumbnails/Print/sale.jpg', fullImage: 'images/Print/sale.jpg', description: 'Retail sale posters.', year: '2023', role: 'Print Designer' },
  { id: 53, title: 'Prince Collection', category: 'Print', image: 'thumbnails/Print/my prince.jpg', fullImage: 'images/Print/my prince.jpg', description: 'Custom book cover design.', year: '2024', role: 'Print Designer' },
  { id: 55, title: 'Branding 55', category: 'Branding', image: 'thumbnails/Branding/1727268380821.jpg', fullImage: 'images/Branding/1727268380821.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 56, title: 'Branding 56', category: 'Branding', image: 'thumbnails/Branding/1727268436898.jpg', fullImage: 'images/Branding/1727268436898.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 57, title: 'Branding 57', category: 'Branding', image: 'thumbnails/Branding/1727392574514.jpg', fullImage: 'images/Branding/1727392574514.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 58, title: 'Branding 58', category: 'Branding', image: 'thumbnails/Branding/3000.jpg', fullImage: 'images/Branding/3000.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 59, title: 'Ado V 1', category: 'Branding', image: 'thumbnails/Branding/ado v 1.png', fullImage: 'images/Branding/ado v 1.png', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 60, title: 'Ado V', category: 'Branding', image: 'thumbnails/Branding/ado v.png', fullImage: 'images/Branding/ado v.png', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 61, title: 'Artwork', category: 'Branding', image: 'thumbnails/Branding/artwork.jpg', fullImage: 'images/Branding/artwork.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 62, title: 'Billboard', category: 'Branding', image: 'thumbnails/Branding/billboard.jpg', fullImage: 'images/Branding/billboard.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 63, title: 'Brand', category: 'Branding', image: 'thumbnails/Branding/brand.jpg', fullImage: 'images/Branding/brand.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 64, title: 'Chin Chinand Peanuts2', category: 'Branding', image: 'thumbnails/Branding/chin chinAND PEANUTS2.jpg', fullImage: 'images/Branding/chin chinAND PEANUTS2.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 65, title: 'Chin Chinand Peanuts222', category: 'Branding', image: 'thumbnails/Branding/chin chinAND PEANUTS222.jpg', fullImage: 'images/Branding/chin chinAND PEANUTS222.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 66, title: 'Chin Chinand Peanuts333', category: 'Branding', image: 'thumbnails/Branding/chin chinAND PEANUTS333.jpg', fullImage: 'images/Branding/chin chinAND PEANUTS333.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 67, title: 'Danny', category: 'Branding', image: 'thumbnails/Branding/danny.jpg', fullImage: 'images/Branding/danny.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 68, title: 'Instagram', category: 'Branding', image: 'thumbnails/Branding/instagram.jpg', fullImage: 'images/Branding/instagram.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 69, title: 'Owie', category: 'Branding', image: 'thumbnails/Branding/owie.jpg', fullImage: 'images/Branding/owie.jpg', description: 'Professional branding work.', year: '2024', role: 'Designer' },
  { id: 71, title: 'Ado Profile First', category: 'Graphic Design', image: 'thumbnails/Cover/ado profile first.jpg', fullImage: 'images/Cover/ado profile first.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 72, title: 'Ado Profile', category: 'Graphic Design', image: 'thumbnails/Cover/ado profile.jpg', fullImage: 'images/Cover/ado profile.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 73, title: 'Photography 73', category: 'Photography', image: 'thumbnails/Photography/1746489692216.jpg', fullImage: 'images/Photography/1746489692216.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 74, title: 'Photography 74', category: 'Photography', image: 'thumbnails/Photography/2109569f-fa6a-42b9-8774-571258403d64.jpg', fullImage: 'images/Photography/2109569f-fa6a-42b9-8774-571258403d64.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 75, title: 'Photography 75', category: 'Photography', image: 'thumbnails/Photography/57d13422-69fc-40b7-b991-e389914334ba.jpg', fullImage: 'images/Photography/57d13422-69fc-40b7-b991-e389914334ba.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 76, title: 'Photography 76', category: 'Photography', image: 'thumbnails/Photography/648611ab-c520-4ee0-8e84-1234d8e4117e.jpg', fullImage: 'images/Photography/648611ab-c520-4ee0-8e84-1234d8e4117e.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 77, title: 'Photography 77', category: 'Photography', image: 'thumbnails/Photography/911bcf39-3917-4f02-b808-7c4c4bbccea6.jpg', fullImage: 'images/Photography/911bcf39-3917-4f02-b808-7c4c4bbccea6.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 78, title: 'Ani ', category: 'Photography', image: 'thumbnails/Photography/ANI .jpg', fullImage: 'images/Photography/ANI .jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 79, title: 'Ado 500', category: 'Photography', image: 'thumbnails/Photography/Ado 500.jpg', fullImage: 'images/Photography/Ado 500.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 80, title: 'Photography 80', category: 'Photography', image: 'thumbnails/Photography/Cameraman in action at night event (1).png', fullImage: 'images/Photography/Cameraman in action at night event (1).png', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 81, title: 'Dsc 1150', category: 'Photography', image: 'thumbnails/Photography/DSC_1150.JPG', fullImage: 'images/Photography/DSC_1150.JPG', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 82, title: 'Dsc 1324', category: 'Photography', image: 'thumbnails/Photography/DSC_1324.JPG', fullImage: 'images/Photography/DSC_1324.JPG', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 83, title: 'Dsc 2347', category: 'Photography', image: 'thumbnails/Photography/DSC_2347.JPG', fullImage: 'images/Photography/DSC_2347.JPG', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 84, title: 'Dsc 5381', category: 'Photography', image: 'thumbnails/Photography/DSC_5381.JPG', fullImage: 'images/Photography/DSC_5381.JPG', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 85, title: 'Fb Img 17560635019313423', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560635019313423.jpg', fullImage: 'images/Photography/FB_IMG_17560635019313423.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 86, title: 'Photography 86', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560635019313423.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17560635019313423.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 87, title: 'Fb Img 17560635501183968', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560635501183968.jpg', fullImage: 'images/Photography/FB_IMG_17560635501183968.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 88, title: 'Fb Img 17560635547230233', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560635547230233.jpg', fullImage: 'images/Photography/FB_IMG_17560635547230233.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 89, title: 'Photography 89', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560635547230233.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17560635547230233.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 90, title: 'Fb Img 17560635720275371', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560635720275371.jpg', fullImage: 'images/Photography/FB_IMG_17560635720275371.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 91, title: 'Fb Img 17560636054933703', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560636054933703.jpg', fullImage: 'images/Photography/FB_IMG_17560636054933703.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 92, title: 'Fb Img 17560636122398240', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560636122398240.jpg', fullImage: 'images/Photography/FB_IMG_17560636122398240.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 93, title: 'Fb Img 17560636382766497', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560636382766497.jpg', fullImage: 'images/Photography/FB_IMG_17560636382766497.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 94, title: 'Fb Img 17560636732287494', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560636732287494.jpg', fullImage: 'images/Photography/FB_IMG_17560636732287494.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 95, title: 'Fb Img 17560636824176632', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560636824176632.jpg', fullImage: 'images/Photography/FB_IMG_17560636824176632.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 96, title: 'Fb Img 17560636984360101', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560636984360101.jpg', fullImage: 'images/Photography/FB_IMG_17560636984360101.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 97, title: 'Fb Img 17560638376440374', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560638376440374.jpg', fullImage: 'images/Photography/FB_IMG_17560638376440374.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 98, title: 'Photography 98', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560638376440374.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17560638376440374.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 99, title: 'Fb Img 17560638616862749', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560638616862749.jpg', fullImage: 'images/Photography/FB_IMG_17560638616862749.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 100, title: 'Photography 100', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560638616862749.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17560638616862749.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 101, title: 'Fb Img 17560639566772978', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560639566772978.jpg', fullImage: 'images/Photography/FB_IMG_17560639566772978.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 102, title: 'Fb Img 17560639924668381', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560639924668381.jpg', fullImage: 'images/Photography/FB_IMG_17560639924668381.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 103, title: 'Photography 103', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560639924668381.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17560639924668381.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 104, title: 'Fb Img 17560640474074644', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560640474074644.jpg', fullImage: 'images/Photography/FB_IMG_17560640474074644.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 105, title: 'Photography 105', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560640474074644.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17560640474074644.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 106, title: 'Fb Img 17560640518165607', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560640518165607.jpg', fullImage: 'images/Photography/FB_IMG_17560640518165607.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 107, title: 'Fb Img 17560641380477290', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560641380477290.jpg', fullImage: 'images/Photography/FB_IMG_17560641380477290.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 108, title: 'Photography 108', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17560641380477290.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17560641380477290.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 109, title: 'Fb Img 17577105655167056', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17577105655167056.jpg', fullImage: 'images/Photography/FB_IMG_17577105655167056.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 110, title: 'Photography 110', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17577105655167056.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17577105655167056.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 111, title: 'Fb Img 17578519636504752', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578519636504752.jpg', fullImage: 'images/Photography/FB_IMG_17578519636504752.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 112, title: 'Fb Img 17578519832664412', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578519832664412.jpg', fullImage: 'images/Photography/FB_IMG_17578519832664412.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 113, title: 'Fb Img 17578519921854967', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578519921854967.jpg', fullImage: 'images/Photography/FB_IMG_17578519921854967.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 114, title: 'Fb Img 17578520407116493', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578520407116493.jpg', fullImage: 'images/Photography/FB_IMG_17578520407116493.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 115, title: 'Fb Img 17578520430618775', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578520430618775.jpg', fullImage: 'images/Photography/FB_IMG_17578520430618775.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 116, title: 'Fb Img 17578520572292688', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578520572292688.jpg', fullImage: 'images/Photography/FB_IMG_17578520572292688.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 117, title: 'Photography 117', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578520572292688.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17578520572292688.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 118, title: 'Fb Img 17578520881676728', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578520881676728.jpg', fullImage: 'images/Photography/FB_IMG_17578520881676728.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 119, title: 'Fb Img 17578520920647584', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578520920647584.jpg', fullImage: 'images/Photography/FB_IMG_17578520920647584.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 120, title: 'Fb Img 17578521236912226', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578521236912226.jpg', fullImage: 'images/Photography/FB_IMG_17578521236912226.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 121, title: 'Fb Img 17578521912341583', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578521912341583.jpg', fullImage: 'images/Photography/FB_IMG_17578521912341583.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 122, title: 'Fb Img 17578521968246980', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578521968246980.jpg', fullImage: 'images/Photography/FB_IMG_17578521968246980.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 123, title: 'Fb Img 17578521992843677', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578521992843677.jpg', fullImage: 'images/Photography/FB_IMG_17578521992843677.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 124, title: 'Fb Img 17578523166331457', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578523166331457.jpg', fullImage: 'images/Photography/FB_IMG_17578523166331457.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 125, title: 'Fb Img 17578523496460881', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578523496460881.jpg', fullImage: 'images/Photography/FB_IMG_17578523496460881.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 126, title: 'Fb Img 17578602368264619', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578602368264619.jpg', fullImage: 'images/Photography/FB_IMG_17578602368264619.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 127, title: 'Fb Img 17578604323670814', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578604323670814.jpg', fullImage: 'images/Photography/FB_IMG_17578604323670814.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 128, title: 'Photography 128', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578604323670814.jpg.jpeg', fullImage: 'images/Photography/FB_IMG_17578604323670814.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 129, title: 'Fb Img 17578605112631677', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578605112631677.jpg', fullImage: 'images/Photography/FB_IMG_17578605112631677.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 130, title: 'Fb Img 17578605158891967', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17578605158891967.jpg', fullImage: 'images/Photography/FB_IMG_17578605158891967.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 131, title: 'Fb Img 17703040152197631', category: 'Photography', image: 'thumbnails/Photography/FB_IMG_17703040152197631.jpg', fullImage: 'images/Photography/FB_IMG_17703040152197631.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 132, title: 'Global Queen', category: 'Photography', image: 'thumbnails/Photography/Global queen.jpg', fullImage: 'images/Photography/Global queen.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 133, title: 'Img 20250509 083909.Jpg', category: 'Photography', image: 'thumbnails/Photography/IMG_20250509_083909.jpg.jpeg', fullImage: 'images/Photography/IMG_20250509_083909.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 134, title: 'Img 20250610 000403', category: 'Photography', image: 'thumbnails/Photography/IMG_20250610_000403.jpg', fullImage: 'images/Photography/IMG_20250610_000403.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 135, title: 'Img 20250613 043612.Jpg', category: 'Photography', image: 'thumbnails/Photography/IMG_20250613_043612.jpg.jpeg', fullImage: 'images/Photography/IMG_20250613_043612.jpg.jpeg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 136, title: 'Img 2644', category: 'Photography', image: 'thumbnails/Photography/IMG_2644.jpg', fullImage: 'images/Photography/IMG_2644.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 137, title: 'Olive Dan', category: 'Photography', image: 'thumbnails/Photography/OLIVE DAN.jpg', fullImage: 'images/Photography/OLIVE DAN.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 138, title: 'Ado 2332', category: 'Photography', image: 'thumbnails/Photography/ado 2332.png', fullImage: 'images/Photography/ado 2332.png', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 139, title: 'Photography 139', category: 'Photography', image: 'thumbnails/Photography/aee63551-2385-40a5-baba-e86708181608.jpg', fullImage: 'images/Photography/aee63551-2385-40a5-baba-e86708181608.jpg', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 140, title: 'Anita', category: 'Photography', image: 'thumbnails/Photography/anita.png', fullImage: 'images/Photography/anita.png', description: 'Professional photography work.', year: '2024', role: 'Designer' },
  { id: 141, title: 'Samson Adoche Copy2 01', category: 'Print', image: 'thumbnails/Print/samson adoche copy2-01.jpeg', fullImage: 'images/Print/samson adoche copy2-01.jpeg', description: 'Professional print work.', year: '2024', role: 'Designer' },
  { id: 142, title: 'Graphic Design 142', category: 'Graphic Design', image: 'thumbnails/graphic design/1725251447699.jpg', fullImage: 'images/graphic design/1725251447699.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 143, title: 'Graphic Design 143', category: 'Graphic Design', image: 'thumbnails/graphic design/1726261102418.jpg', fullImage: 'images/graphic design/1726261102418.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 144, title: 'Graphic Design 144', category: 'Graphic Design', image: 'thumbnails/graphic design/1730316295478.jpg', fullImage: 'images/graphic design/1730316295478.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 145, title: 'Graphic Design 145', category: 'Graphic Design', image: 'thumbnails/graphic design/1730316405109.jpg', fullImage: 'images/graphic design/1730316405109.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 146, title: 'Graphic Design 146', category: 'Graphic Design', image: 'thumbnails/graphic design/1730469757246.jpg', fullImage: 'images/graphic design/1730469757246.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 147, title: 'Graphic Design 147', category: 'Graphic Design', image: 'thumbnails/graphic design/1732074575909.jpg', fullImage: 'images/graphic design/1732074575909.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 148, title: 'Graphic Design 148', category: 'Graphic Design', image: 'thumbnails/graphic design/1732074750916.jpg', fullImage: 'images/graphic design/1732074750916.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 149, title: 'Graphic Design 149', category: 'Graphic Design', image: 'thumbnails/graphic design/1733571978649.jpg', fullImage: 'images/graphic design/1733571978649.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 150, title: 'Ado 31', category: 'Graphic Design', image: 'thumbnails/graphic design/Ado 31.jpg', fullImage: 'images/graphic design/Ado 31.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 151, title: 'Birthday Flyer', category: 'Graphic Design', image: 'thumbnails/graphic design/Birthday Flyer.jpg', fullImage: 'images/graphic design/Birthday Flyer.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 152, title: 'Birthday', category: 'Graphic Design', image: 'thumbnails/graphic design/Birthday.jpg', fullImage: 'images/graphic design/Birthday.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 153, title: 'Fb Img 17506677358913278', category: 'Graphic Design', image: 'thumbnails/graphic design/FB_IMG_17506677358913278.jpg', fullImage: 'images/graphic design/FB_IMG_17506677358913278.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 154, title: 'Img 20250404 145110', category: 'Graphic Design', image: 'thumbnails/graphic design/IMG_20250404_145110.jpg', fullImage: 'images/graphic design/IMG_20250404_145110.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 155, title: 'My Love', category: 'Graphic Design', image: 'thumbnails/graphic design/My love.jpeg', fullImage: 'images/graphic design/My love.jpeg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 156, title: 'Prince .De', category: 'Graphic Design', image: 'thumbnails/graphic design/PRINCE .DE.jpg', fullImage: 'images/graphic design/PRINCE .DE.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 157, title: 'Samson', category: 'Graphic Design', image: 'thumbnails/graphic design/SAMSON.jpg', fullImage: 'images/graphic design/SAMSON.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 158, title: 'Untitled 2', category: 'Graphic Design', image: 'thumbnails/graphic design/Untitled-2.jpg', fullImage: 'images/graphic design/Untitled-2.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 159, title: 'Abba12', category: 'Graphic Design', image: 'thumbnails/graphic design/abba12.jpg', fullImage: 'images/graphic design/abba12.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 160, title: 'Abbaajene', category: 'Graphic Design', image: 'thumbnails/graphic design/abbaajene.jpg', fullImage: 'images/graphic design/abbaajene.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 161, title: 'Ado 15', category: 'Graphic Design', image: 'thumbnails/graphic design/ado 15.jpg', fullImage: 'images/graphic design/ado 15.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 162, title: 'Bir2', category: 'Graphic Design', image: 'thumbnails/graphic design/bir2.jpg', fullImage: 'images/graphic design/bir2.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 163, title: 'Children Carnival 2025', category: 'Graphic Design', image: 'thumbnails/graphic design/children carnival 2025.jpg', fullImage: 'images/graphic design/children carnival 2025.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 164, title: 'Olive 222', category: 'Graphic Design', image: 'thumbnails/graphic design/olive 222.jpg', fullImage: 'images/graphic design/olive 222.jpg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
  { id: 165, title: 'Pccc', category: 'Graphic Design', image: 'thumbnails/graphic design/pccc.jpeg', fullImage: 'images/graphic design/pccc.jpeg', description: 'Professional graphic design work.', year: '2024', role: 'Designer' },
];

const categories = ['All', 'Graphic Design', 'Branding', 'Photography', 'Print'];

export function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [itemsToShow, setItemsToShow] = useState(9);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, itemsToShow);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setItemsToShow(9); // Reset to initial count on filter change
  };

  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
            >
              Selected <span className="text-indigo-600">Work</span>
            </motion.h2>
          </div>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                  filter === cat 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative cursor-pointer overflow-hidden bg-slate-50 border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] w-full overflow-hidden transition-opacity duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 left-4 z-20 text-xs px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-700 rounded-full font-semibold shadow-sm">
                  {project.category}
                </div>
                
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-1 shadow-sm">{project.title}</h3>
                  <p className="text-sm text-slate-200 font-medium">{project.year}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {itemsToShow < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setItemsToShow(prev => prev + 9)}
              className="px-10 py-4 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              Show More Work
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full text-slate-800 flex items-center justify-center shadow-sm hover:bg-slate-100 transition-colors"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-1">
                <div className="w-full bg-slate-100 flex items-center justify-center overflow-hidden" style={{ minHeight: '300px' }}>
                  <img 
                    id="modal-image"
                    src={selectedProject.fullImage} 
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="max-w-full h-auto object-contain"
                    style={{ maxHeight: '60vh' }}
                  />
                </div>
                
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-semibold text-indigo-600 uppercase tracking-widest">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">{selectedProject.category}</span>
                    <span className="text-slate-400 font-medium">&bull;</span>
                    <span className="text-slate-500 font-medium">{selectedProject.year}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-none">{selectedProject.title}</h3>
                  
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-2xl">
                    {selectedProject.description}
                  </p>

                  <div className="h-px w-full bg-slate-200 mb-8" />

                  <div className="flex flex-wrap justify-between items-center gap-6">
                    <div>
                      <span className="block text-sm text-slate-500 mb-1 font-medium">Role</span>
                      <span className="text-base font-semibold text-slate-900">{selectedProject.role}</span>
                    </div>
                    <a 
                      href={selectedProject.fullImage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
                    >
                      View Live <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
