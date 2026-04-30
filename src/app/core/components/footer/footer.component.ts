import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-gray-50 text-gray-600 pt-16 pb-8 border-t border-gray-200">
      <div class="container mx-auto px-6">
        
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="mb-6 select-none">
              <img src="bmtechlogo.png" alt="BMTech Logo" class="h-12 w-auto object-contain">
            </div>
            
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              Sua parceira global em Cibersegurança e Identidade Digital. 
              Elevando o padrão de confiança para empresas que não podem parar.
            </p>

            <div class="flex flex-wrap gap-6 items-center mb-8">
              <img src="partners/sectigo.svg" alt="Sectigo Partner" class="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" title="Parceiro Oficial Sectigo">
            </div>

            <div class="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/bmtechdobrasil/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#0a66c2] transition-colors duration-300" title="Siga a BMTech no LinkedIn">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>

          </div>

          <div class="col-span-2">
            <h4 class="text-lg font-bold mb-6 text-bm-blue border-l-4 border-bm-red pl-3">Nossa Presença</h4>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <p class="text-bm-red text-xs font-bold uppercase mb-2">Brasil</p>
                <p class="text-gray-600 text-sm">R. Trajano, 279 - Sala 701</p>
                <p class="text-gray-600 text-sm">Centro, Florianópolis - SC, 88010-010</p>
                <a href="tel:+554830547153" class="text-bm-blue font-bold text-xs mt-2 block hover:underline transition">+55 (48) 3054-7153</a>
                <a href="mailto:support@bmtechcorp.com" class="text-bm-blue font-bold text-xs mt-1 block hover:underline transition">suporte&#64;bmtechbrasil.com</a>
              </div>

              <div>
                <p class="text-bm-red text-xs font-bold uppercase mb-2">USA</p>
                <p class="text-gray-600 text-sm">16627 Hemingway Dr</p>
                <p class="text-gray-600 text-sm">Weston, FL 33326</p>
                <a href="tel:+19549019527" class="text-bm-blue font-bold text-xs mt-2 block hover:underline transition">+1 954 901-9527</a>
                <a href="mailto:support@bmtechcorp.com" class="text-bm-blue font-bold text-xs mt-1 block hover:underline transition">support&#64;bmtechcorp.com</a>
              </div>

              <div>
                <p class="text-bm-red text-xs font-bold uppercase mb-2">Peru</p>
                <p class="text-gray-600 text-sm">Av. Antonio Miró Quesada 457, piso 15</p>
                <p class="text-gray-600 text-sm">Magdalena del Mar, Lima</p>
                <a href="tel:+5112461991" class="text-bm-blue font-bold text-xs mt-2 block hover:underline transition">+51 1 246-1991</a>
                <a href="mailto:soporte@bmtech.pe" class="text-bm-blue font-bold text-xs mt-1 block hover:underline transition">soporte&#64;bmtech.pe</a>
              </div>

            </div>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-6 text-bm-blue border-l-4 border-bm-red pl-3">Links Rápidos</h4>
            <ul class="space-y-3 text-sm text-gray-500">
              <li><a routerLink="/" class="hover:text-bm-red hover:pl-1 transition-all">Home</a></li>
              <li><a href="#" class="hover:text-bm-red hover:pl-1 transition-all">Soluções Corporativas</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 BMTech Brasil. Todos os direitos reservados.</p>
          
          <div class="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md shadow-sm select-none" title="Ambiente Seguro">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span class="font-bold text-gray-700 uppercase tracking-widest text-[10px]">Site 100% Seguro</span>
          </div>         
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}