import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-sectigo',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="bg-gray-50 border-b border-gray-200 mt-20 py-4 relative z-20 shadow-sm">
        <div class="container mx-auto px-2 md:px-6">
          <div class="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 md:gap-4">

          @for (partner of partners(); track partner.name) {
            <div class="group flex items-center justify-center w-20 h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
               <img [src]="partner.img" [alt]="partner.name" 
                    class="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
               
               <span class="hidden text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-bm-blue transition-colors select-none text-center leading-tight">
                 {{ partner.name }}
               </span>
            </div>
          }
        </div>
      </div>
    </div>

    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      
      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-green-100 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> Revendedor Oficial Sectigo
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Certificados SSL/TLS <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Máxima Confiança</span>.
          </h1>
          <p class="text-lg text-bm-white mb-8 leading-relaxed max-w-xl">
            Proteja o seu site, os dados dos seus clientes e impulsione o seu SEO com a Autoridade de Certificação (CA) comercial líder mundial. A BMTech simplifica a emissão e a gestão dos seus certificados.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="openContactModal('Consultoria Sectigo SSL', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg transform hover:-translate-y-1">
              Falar com Especialista
            </button>
          </div>
        </div>

        <div class="hidden lg:flex justify-center relative">
          <div class="w-64 h-64 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.5)] relative z-10 animate-[bounce_4s_infinite]">
            <svg class="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <div class="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Escolha o nível de validação ideal</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600">
            Diferentes projetos exigem diferentes níveis de confiança e verificação de identidade. Conheça as três principais categorias de certificados SSL/TLS da Sectigo.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div class="w-14 h-14 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-bm-blue mb-2">Domain Validation (DV)</h3>
            <p class="text-sm text-gray-500 font-bold mb-4 uppercase tracking-wider">Emissão em Minutos</p>
            <p class="text-gray-600 mb-6 flex-grow">
              Valida apenas a propriedade do domínio. É a opção mais rápida e básica, ideal para blogs, portfólios e sites que não coletam dados sensíveis.
            </p>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Criptografia 256-bit forte</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Cadeado de segurança no navegador</li>
              <li class="flex items-center gap-2 text-gray-400"><span class="text-gray-300 font-bold">X</span> Sem validação da empresa</li>
            </ul>
            <button (click)="openModal('DV')" class="w-full border-2 border-bm-blue text-bm-blue py-3 rounded font-bold hover:bg-bm-blue hover:text-white transition mt-auto">
              Saber mais
            </button>
          </div>

          <div class="bg-white rounded-xl shadow-xl border-2 border-bm-blue p-8 hover:-translate-y-2 transition-all duration-300 relative flex flex-col h-full">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bm-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Recomendado
            </div>
            <div class="w-14 h-14 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-bm-blue mb-2">Organization Validation (OV)</h3>
            <p class="text-sm text-gray-500 font-bold mb-4 uppercase tracking-wider">Emissão em 1 a 3 dias</p>
            <p class="text-gray-600 mb-6 flex-grow">
              Autentica a existência legal e operacional da sua empresa. Adiciona uma camada extra de confiança, ideal para portais corporativos e intranets.
            </p>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Detalhes da empresa no certificado</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Criptografia 256-bit forte</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Maior garantia financeira</li>
            </ul>
            <button (click)="openModal('OV')" class="w-full bg-bm-blue text-white py-3 rounded font-bold hover:bg-blue-900 transition mt-auto">
              Saber mais
            </button>
          </div>

          <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div class="w-14 h-14 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-bm-blue mb-2">Extended Validation (EV)</h3>
            <p class="text-sm text-gray-500 font-bold mb-4 uppercase tracking-wider">Emissão em 1 a 5 dias</p>
            <p class="text-gray-600 mb-6 flex-grow">
              O mais alto nível de autenticação comercial. O processo de verificação é rigoroso, ideal para bancos, e-commerce e sites que transacionam valores.
            </p>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Nome da empresa visível</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Máxima confiança e conversão</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Proteção máxima contra phishing</li>
            </ul>
            <button (click)="openModal('EV')" class="w-full border-2 border-bm-blue text-bm-blue py-3 rounded font-bold hover:bg-bm-blue hover:text-white transition mt-auto">
              Saber mais
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        
        <div class="flex items-center justify-center mb-16">
          <div class="h-px bg-green-500 flex-grow max-w-[100px] md:max-w-[200px]"></div>
          <h2 class="text-3xl font-bold text-bm-blue mx-6 text-center">Certificados SSL por Cobertura de Domínio</h2>
          <div class="h-px bg-green-500 flex-grow max-w-[100px] md:max-w-[200px]"></div>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 items-stretch">
          
          <div class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col text-center hover:-translate-y-1 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-6 text-bm-blue flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                <circle cx="12" cy="11" r="3" stroke-linecap="round" stroke-linejoin="round"></circle>
              </svg>
            </div>
            
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Certificados SSL Wildcard</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Proteja o seu domínio principal e subdomínios ilimitados sob um único certificado. Os certificados SSL Wildcard são a forma mais conveniente de fornecer proteção SSL e criptografia para um domínio e seus subdomínios.
            </p>

            <ul class="w-full text-left space-y-3 mb-8 border-t border-gray-100 pt-6">
              <li>
                <a href="#" (click)="openContactModal('Wildcard OV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Wildcard OV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Wildcard DV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Wildcard DV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col text-center hover:-translate-y-1 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-6 text-bm-blue flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                <circle cx="12" cy="11" r="3" stroke-linecap="round" stroke-linejoin="round"></circle>
              </svg>
            </div>
            
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Certificados SSL Multi-Domínio</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Proteja até 100 nomes de domínio com um único certificado. Os certificados SSL Multi-domínio (também referidos como certificados SAN/UCC) permitem que um único certificado proteja múltiplos nomes de domínio.
            </p>

            <ul class="w-full text-left space-y-3 mb-8 border-t border-gray-100 pt-6">
              <li>
                <a href="#" (click)="openContactModal('Multi Domain EV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Multi Domain EV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Multi Domain OV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Multi Domain OV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Multi Domain DV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Multi Domain DV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col text-center hover:-translate-y-1 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-6 text-bm-blue flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                <circle cx="12" cy="11" r="3" stroke-linecap="round" stroke-linejoin="round"></circle>
              </svg>
            </div>
            
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Certificados de Domínio Único</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Proteja um domínio individual com um certificado Sectigo Single SSL. Disponíveis nas opções de Validação de Domínio, Validação Organizacional e Validação Estendida. Inclui um selo de segurança Trust Logo.
            </p>

            <ul class="w-full text-left space-y-3 mb-8 border-t border-gray-100 pt-6">
              <li>
                <a href="#" (click)="openContactModal('Single Domain EV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Single Domain EV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Single Domain OV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Single Domain OV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Single Domain DV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Single Domain DV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 border-t-4 border-bm-red">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">256-bit</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Criptografia Forte</p>
            <p class="text-xs text-blue-200 mt-2">Padrão da indústria (RSA ou ECC).</p>
          </div>
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">99.9%</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Reconhecimento</p>
            <p class="text-xs text-blue-200 mt-2">Compatível com todos os navegadores.</p>
          </div>
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">Ilimitado</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Licenças de Servidor</p>
            <p class="text-xs text-blue-200 mt-2">Instale em quantos servidores precisar.</p>
          </div>
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">Selo</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Sectigo Trust Seal</p>
            <p class="text-xs text-blue-200 mt-2">Selo dinâmico para o seu site.</p>
          </div>
        </div>
      </div>
    </section>

    @if (activeModal() !== null) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>
        
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 transform transition-all animate-fade-in-up max-h-[90vh] overflow-y-auto">
          
          <button (click)="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          @if (activeModal() === 'DV') {
            <div>
              <div class="w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Validação de Domínio (DV)</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">O certificado de Validação de Domínio (DV) é o tipo mais básico e rápido de SSL. A Autoridade de Certificação (Sectigo) verifica apenas se quem está solicitando o certificado tem controle administrativo sobre o domínio específico.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Como funciona a validação?</h4>
              <p class="text-gray-600 text-sm mb-4">Normalmente é feito de forma automatizada por e-mail (admin&#64;seudominio.com), adicionando um arquivo ao seu servidor (HTTP Hash) ou através de um registro de DNS.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Ideal para:</h4>
              <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Blogs e sites pessoais</li>
                <li>Páginas institucionais que não coletam dados (sem formulários de login/pagamento)</li>
                <li>Ambientes de teste ou desenvolvimento interno</li>
              </ul>
            </div>
          }

          @if (activeModal() === 'OV') {
            <div>
              <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Validação Organizacional (OV)</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">Um passo acima na confiança. Além de verificar o controle do domínio, a Sectigo efetua verificações manuais para confirmar a existência legal e física da sua empresa, garantindo aos visitantes que o site pertence a uma organização legítima.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Como funciona a validação?</h4>
              <p class="text-gray-600 text-sm mb-4">A Sectigo verifica os registros governamentais da sua empresa (como CNPJ no Brasil), confere se a empresa está ativa, valida o endereço físico e faz uma ligação telefônica de verificação para o número registrado oficialmente.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Ideal para:</h4>
              <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Sites corporativos e institucionais de médias e grandes empresas</li>
                <li>Sistemas de webmail, VPNs e Intranets</li>
                <li>Portais que solicitam dados de login ou informações pessoais dos clientes</li>
              </ul>
            </div>
          }

          @if (activeModal() === 'EV') {
            <div>
              <div class="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Validação Estendida (EV)</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">O padrão ouro da confiança online. Os certificados EV exigem a verificação mais rigorosa da indústria. Quando os usuários clicam no cadeado no navegador, os detalhes da sua empresa são apresentados de forma proeminente, provando 100% que não se trata de um site falso.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Como funciona a validação?</h4>
              <p class="text-gray-600 text-sm mb-4">Além de todas as verificações do OV (domínio, registro legal, endereço e telefone), a Sectigo verifica a identidade do solicitante e o seu vínculo empregatício com a empresa, garantindo que ele tem autoridade para solicitar o certificado.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Ideal para:</h4>
              <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Bancos, Fintechs e Instituições Financeiras</li>
                <li>Lojas virtuais (E-commerce) de alto volume</li>
                <li>Qualquer site que busque a máxima taxa de conversão e proteção de marca</li>
              </ul>
            </div>
          }

          @if (activeModal() === 'CONTACT') {
            <div>
              <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Solicitar Orçamento</h3>
              <p class="text-gray-600 mb-6">Preencha os dados abaixo para receber uma proposta comercial e orientações sobre o certificado <strong>{{ selectedCertificateName() }}</strong>.</p>
              
              <form (submit)="onSubmitContact($event)" class="space-y-4">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nome Completo *</label>
                    <input type="text" name="user_name" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">E-mail Corporativo *</label>
                    <input type="email" name="user_email" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Telefone / WhatsApp *</label>
                    <input type="tel" name="user_phone" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nome da Empresa</label>
                    <input type="text" name="company_name" [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Produto Desejado</label>
                  <input type="text" name="product_subject" [value]="selectedCertificateName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Detalhes do Projeto</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Deixe aqui o maior número de informações possíveis" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
                </div>

                <button type="submit" [disabled]="isSubmitting() || submitSuccess()" 
                        [ngClass]="{'bg-green-500 hover:bg-green-600': submitSuccess(), 'bg-bm-blue hover:bg-blue-900': !submitSuccess()}"
                        class="w-full text-white font-bold py-3 px-4 rounded transition shadow-md flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  
                  @if (isSubmitting()) {
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  } @else if (submitSuccess()) {
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Solicitação Enviada!
                  } @else {
                    Enviar Solicitação
                  }
                </button>
              </form>
            </div>
          }

          @if (activeModal() !== 'CONTACT') {
            <div class="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button (click)="closeModal()" class="bg-gray-100 text-gray-700 px-6 py-2 rounded font-bold hover:bg-gray-200 transition">Fechar</button>
            </div>
          }
        </div>
      </div>
    }
  `
})
export class SectigoComponent {
  activeModal = signal<'DV' | 'OV' | 'EV' | 'CONTACT' | null>(null);
  selectedCertificateName = signal<string>('');

  isSubmitting = signal(false);
  submitSuccess = signal(false);

  openModal(type: 'DV' | 'OV' | 'EV') {
    this.activeModal.set(type);
    document.body.style.overflow = 'hidden';
  }

  openContactModal(certName: string, event: Event) {
    event.preventDefault();
    this.selectedCertificateName.set(certName);
    this.activeModal.set('CONTACT');
    this.submitSuccess.set(false);
    document.body.style.overflow = 'hidden'
  }

  closeModal() {
    this.activeModal.set(null);
    document.body.style.overflow = 'auto';
  }

  async onSubmitContact(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    this.isSubmitting.set(true);

    try {
      await emailjs.sendForm(
        'service_v5pa4n7',
        'template_vg8qiqn',
        form,
        'Ja_KrZXfa-gEENU3O'
      );

      this.submitSuccess.set(true);

      setTimeout(() => {
        this.closeModal();
        this.submitSuccess.set(false);
        form.reset();
      }, 3000);

    } catch (error) {
      console.error('Falha ao enviar o e-mail via EmailJS', error);
      alert('Ocorreu um erro de comunicação. Por favor, tente novamente ou entre em contato pelo WhatsApp.');  
    } finally {
      this.isSubmitting.set(false);
    }
  }

  partners = signal([
    { name: 'Sectigo', img: 'partners/sectigo.svg' },
    { name: 'Teramind', img: 'partners/teramind.svg' },
    { name: 'Hexnode', img: 'partners/hexnode.svg' },
    { name: 'KickIdler', img: 'partners/kickidler.png' },
    { name: 'Portal Flex', img: 'partners/pfx.svg' },
    { name: 'Keytalk', img: 'partners/keytalk.svg' }
  ]);
}