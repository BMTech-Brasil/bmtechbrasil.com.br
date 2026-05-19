import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 pt-32 pb-20 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl">
          <span class="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
            Utilitários
          </span>
          <h1 class="mt-6 text-4xl font-bold md:text-6xl">Ferramentas para Certificados</h1>
          <p class="mt-5 text-lg leading-relaxed text-blue-100">
            Recursos práticos para apoiar a validação, emissão e conferência
            de arquivos de Solicitação de Assinatura e de Certificados Digitais SSL/TLS.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-100 py-16 text-gray-900">
      <div class="container mx-auto px-6">
        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <a
            routerLink="/tools/csr-decoder"
            class="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 hover:border-bm-blue"
          >
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-bm-blue transition group-hover:bg-bm-blue group-hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
              </svg>
            </div>
            <h2 class="mt-6 text-2xl font-bold text-bm-blue">CSR Decoder</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              Analise rapidamente uma <em>Certificate Signing Request</em> e confira <em>subject</em>, SANs e os principais atributos da Chave Pública.
            </p>
            <span class="mt-6 inline-flex text-sm font-bold text-bm-red">Abrir ferramenta &rarr;</span>
          </a>

          <a
            routerLink="/tools/cert-decoder"
            class="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 hover:border-bm-blue"
          >
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-bm-blue transition group-hover:bg-bm-blue group-hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h2 class="mt-6 text-2xl font-bold text-bm-blue">Certificate Decoder</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              Decodifique um Certificado PEM e confira <em>subject</em>, emissor, validade, SANs e Chave Pública.
            </p>
            <span class="mt-6 inline-flex text-sm font-bold text-bm-red">Abrir ferramenta &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ToolsComponent {}
