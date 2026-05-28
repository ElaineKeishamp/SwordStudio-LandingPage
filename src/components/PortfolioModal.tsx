/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { X, Calendar, User, CheckCircle, Award, Briefcase } from "lucide-react";
import { PortfolioItem } from "../types";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container-low border border-outline/20 rounded-2xl md:rounded-[32px] overflow-y-auto overflow-x-hidden shadow-2xl z-10 flex flex-col md:flex-row"
      >
        {/* Absolute close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-25 p-2 bg-surface-container-lowest/80 hover:bg-surface-container border border-outline-variant/25 text-on-surface hover:text-primary rounded-full transition-all hover:scale-105 active:scale-95"
          aria-label="Tutup Detail"
        >
          <X size={18} />
        </button>

        {/* Left column: Showcase Image & Banner */}
        <div className="w-full md:w-5/12 bg-surface-container-lowest relative min-h-[250px] md:min-h-full">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover absolute inset-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase bg-primary/15 border border-primary/20 px-2 py-1 rounded">
              {item.tag}
            </span>
            <h4 className="font-serif text-3xl font-bold text-white mt-3 leading-tight drop-shadow-md">
              {item.title}
            </h4>
          </div>
        </div>

        {/* Right column: Analytical narrative of Forge Solution */}
        <div className="w-full md:w-7/12 p-6 md:p-10 space-y-6 overflow-y-auto">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-outline-variant/10">
            <div className="flex items-center gap-2.5 text-xs text-on-surface-variant">
              <User size={15} className="text-primary shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider">Klien</p>
                <p className="font-semibold text-white truncate">{item.client}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-on-surface-variant">
              <Calendar size={15} className="text-primary shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider">Tahun Rilis</p>
                <p className="font-semibold text-white">{item.year}</p>
              </div>
            </div>
          </div>

          {/* Deep Description */}
          <div className="space-y-2">
            <h5 className="text-[11px] font-mono font-bold uppercase text-primary tracking-widest flex items-center gap-1.5">
              <Award size={13} /> TINJAUAN STRATEGIS
            </h5>
            <p className="text-xs md:text-sm text-on-surface leading-relaxed font-light">
              {item.longDescription}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* The Challenge */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-mono font-bold uppercase text-on-surface-variant tracking-widest flex items-center gap-1.5">
                <Briefcase size={12} /> TANTANGAN UTAMA
              </h5>
              <div className="p-3 bg-surface-container/60 border border-outline-variant/10 rounded-xl">
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.challenge}
                </p>
              </div>
            </div>

            {/* The Forge Solution */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-mono font-bold uppercase text-primary tracking-widest flex items-center gap-1.5">
                <CheckCircle size={12} /> SOLUSI TAJAM
              </h5>
              <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl">
                <p className="text-xs text-on-surface leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Results/Metrics list */}
          <div className="space-y-3 pt-2">
            <h5 className="text-[11px] font-mono font-bold uppercase text-primary tracking-widest">
              HASIL RANCANGAN (METRIKS PENINGKATAN)
            </h5>
            <div className="space-y-2">
              {item.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs">
                  <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-on-surface-variant font-medium leading-relaxed">
                    {res}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button inside modal */}
          <div className="pt-4 border-t border-outline-variant/10 flex justify-end">
            <a
              href={`https://wa.me/yournumber?text=Halo%20Sword%20Studio,%20saya%20tertarik%20dengan%20studi%20kasus%20${encodeURIComponent(item.title)}.`}
              target="_blank"
              rel="noreferrer"
              className="gold-gradient text-on-primary text-[10px] font-bold tracking-widest uppercase px-5 py-3 rounded hover:scale-[1.03] transition-all inline-block active:scale-95"
            >
              Diskusi Kasus Serupa
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
