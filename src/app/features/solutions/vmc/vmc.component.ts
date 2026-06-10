import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vmc',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-gray-50 border-b border-gray-200 mt-20 py-4 relative z-20 shadow-sm">
      <div class="container mx-auto px-2 md:px-6">
        <div class="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 md:gap-4">
          @for (group of partnerGroups(); track group.category) {
            <div class="flex flex-col items-center">
              <span class="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-200 pb-1 px-4">{{ group.category }}</span>
              <div class="flex flex-wrap justify-center gap-2 md:gap-4">
                @for (partner of group.items; track partner.name) {
                  <a [routerLink]="partner.url" class="group flex items-center justify-center w-20 h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                     <img [src]="partner.img" [alt]="partner.name" class="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                     <span class="hidden text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-bm-blue transition-colors select-none text-center leading-tight">{{ partner.name }}</span>
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>

    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      </div>

      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-bm-red/20 border border-bm-red/30 px-3 py-1 rounded-full text-xs font-bold text-red-200 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Tecnologia BIMI
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Destaque sua marca na<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Caixa de Entrada</span>.
          </h1>
          <p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            O VMC (Verified Mark Certificate) é o único certificado que exibe seu logotipo autenticado no Gmail e Apple Mail. Garanta o selo azul de verificação e aumente suas taxas de abertura.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="openContactModal('Cotação VMC (BIMI)', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
              Solicitar Cotação VMC
            </button>
          </div>
        </div>
        
        <div class="relative group perspective-1000 hidden lg:block">
          <div class="bg-white text-gray-800 rounded-xl shadow-2xl p-6 max-w-md mx-auto relative z-10 transform transition-transform duration-500 hover:scale-105 border border-gray-200">
             <div class="flex gap-2 mb-4 border-b border-gray-100 pb-2">
               <div class="w-3 h-3 rounded-full bg-red-400"></div>
               <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div class="w-3 h-3 rounded-full bg-green-400"></div>
             </div>
             <div class="flex items-start gap-4 p-3 bg-blue-50/50 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <div class="relative shrink-0">
                  <div class="w-12 h-12 bg-bm-blue rounded-full flex items-center justify-center text-white font-bold text-xl ring-2 ring-white shadow-md">BM</div>
                  <div class="absolute -bottom-1 -right-1 bg-blue-500 text-white w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm" title="Verificado">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-sm">BMTech Brasil</h4>
                  <p class="text-xs font-bold text-gray-800">Sua segurança digital foi atualizada</p>
                  <p class="text-xs text-gray-500">Olá, confirmamos a ativação do seu certificado...</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Como seu cliente vê sua marca</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Veja como o VMC transforma um e-mail genérico em uma comunicação autenticada e visualmente impactante nas principais plataformas.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 group hover:-translate-y-2 transition-all duration-300">
            <div class="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
              <span class="text-xs font-bold text-gray-500">GMAIL</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" class="w-4 h-4 opacity-50">
            </div>
            <div class="p-4">
              <div class="flex gap-3 items-center">
                <div class="relative">
                  <div class="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center text-white font-bold text-sm">in</div>
                  <div class="absolute -bottom-1 -right-1 bg-blue-500 text-white w-4 h-4 flex items-center justify-center rounded-full border border-white">
                    <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-baseline">
                    <p class="text-sm font-bold text-gray-900 truncate">LinkedIn</p>
                    <span class="text-[10px] text-gray-400">09:15</span>
                  </div>
                  <p class="text-xs text-gray-800 font-medium truncate">Convite para conectar</p>
                  <p class="text-[10px] text-gray-500 truncate">João Silva quer fazer parte da sua rede...</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 group hover:-translate-y-2 transition-all duration-300">
            <div class="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
              <span class="text-xs font-bold text-gray-500">APPLE MAIL</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" class="w-4 h-4 opacity-50">
            </div>
            <div class="p-4">
              <div class="flex gap-3 border-b border-gray-100 pb-3">
                
                <div class="w-10 h-10 bg-[#ffe600] rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                   <img src="mercadolivre.png" alt="Mercado Livre" class="w-full h-full object-contain p-1" onerror="this.style.display='none';">
                </div>

                <div class="flex-1">
                  <div class="flex justify-between">
                    <p class="text-sm font-bold text-gray-900">Mercado Livre</p>
                    <span class="text-[10px] text-gray-400">14:20 &gt;</span>
                  </div>
                  <p class="text-xs text-gray-900">Seu pacote chegou!</p>
                  <p class="text-[10px] text-gray-500 line-clamp-2 mt-0.5">Entregamos sua compra no endereço...</p>
                </div>
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 group hover:-translate-y-2 transition-all duration-300">
            <div class="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
              <span class="text-xs font-bold text-gray-500">YAHOO!</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Yahoo%21_Mail_icon_%282013-2019%29.png" class="w-4 h-4 opacity-50">
            </div>
            <div class="p-4">
              <div class="flex gap-3 items-center">
                <div class="w-10 h-10 bg-[#CC0000] rounded-md flex items-center justify-center text-white font-bold text-xs tracking-tighter shadow-sm">
                  CNN
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between">
                    <p class="text-sm font-bold text-gray-900">CNN News</p>
                    <span class="text-[10px] text-gray-400">Agora</span>
                  </div>
                  <p class="text-xs text-gray-500 truncate">Market hits record high today</p>
                </div>
                <input type="checkbox" class="h-3 w-3 rounded border-gray-300 text-purple-600">
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 group hover:-translate-y-2 transition-all duration-300">
            <div class="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
              <span class="text-xs font-bold text-gray-500">FASTMAIL</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Fastmail_icon_2019.svg" class="w-4 h-auto opacity-50">
            </div>
            <div class="p-4 bg-[#f8f9fa]"> 
              <div class="flex gap-3 items-center bg-white p-2 rounded shadow-sm border border-gray-100">
                <div class="w-8 h-8 bg-[#820AD1] rounded flex items-center justify-center text-white font-bold text-[10px]">
                  Nu
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-gray-900">Nubank</p>
                  <p class="text-[10px] text-gray-500 truncate">Fatura fechada: R$ 1.250,00</p>
                </div>
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Por que investir no VMC?</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-bm-blue transition duration-300">
            <p class="text-5xl font-bold text-bm-blue mb-2">+10%</p>
            <p class="text-sm font-bold text-gray-500 uppercase tracking-wide">Abertura de E-mails</p>
            <p class="text-xs text-gray-400 mt-2">Destaque visual gera curiosidade e confiança imediata.</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-bm-blue transition duration-300">
            <p class="text-5xl font-bold text-bm-blue mb-2">Zero</p>
            <p class="text-sm font-bold text-gray-500 uppercase tracking-wide">Phishing / Spoofing</p>
            <p class="text-xs text-gray-400 mt-2">Torna quase impossível para hackers imitarem seu domínio.</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-bm-blue transition duration-300">
            <p class="text-5xl font-bold text-bm-blue mb-2">100%</p>
            <p class="text-sm font-bold text-gray-500 uppercase tracking-wide">Compatibilidade Gmail</p>
            <p class="text-xs text-gray-400 mt-2">Exibe o selo azul de verificação no app e web.</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-bm-blue transition duration-300">
            <p class="text-5xl font-bold text-bm-blue mb-2">ROI</p>
            <p class="text-sm font-bold text-gray-500 uppercase tracking-wide">Retorno Imediato</p>
            <p class="text-xs text-gray-400 mt-2">Melhora a entregabilidade e evita a caixa de spam.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="container mx-auto px-6">
        
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-bm-white mb-4">Veja o VMC em Ação</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-bm-white max-w-2xl mx-auto">
            Entenda em poucos minutos como a tecnologia BIMI em conjunto com os certificados VMC protegem a sua marca e aumentam a confiança dos seus clientes.
          </p>
        </div>

        <div class="max-w-4xl mx-auto bg-white p-3 md:p-5 rounded-[2rem] border border-gray-200 shadow-2xl">
          <div class="aspect-video rounded-2xl overflow-hidden relative bg-black shadow-inner">
            <iframe [src]="safeVideoUrl" title="Apresentação VMC e BIMI" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white border-t border-gray-100">
      <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        <div>
          <h2 class="text-3xl font-bold text-bm-blue mb-6">O que você precisa para emitir?</h2>
          <p class="text-gray-600 mb-8">
            O VMC é um certificado de alta segurança (Validação Estendida). Para ser emitido, sua empresa precisa cumprir 3 requisitos técnicos mandatórios.
          </p>
          
          <div class="space-y-6">
            <div class="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition border-l-4 border-transparent hover:border-bm-blue">
              <div class="shrink-0 w-12 h-12 bg-blue-100 text-bm-blue rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h4 class="font-bold text-bm-blue text-lg">DMARC em "Quarentena" ou "Reject"</h4>
                <p class="text-sm text-gray-500 mt-1">
                  Seu domínio deve ter os protocolos SPF e DKIM configurados e uma política DMARC ativa (<code class="bg-gray-100 px-1 rounded text-bm-blue font-mono text-sm">p=quarantine</code> ou <code class="bg-gray-100 px-1 rounded text-bm-blue font-mono text-sm">p=reject</code>) para impedir uso indevido do domínio.
                </p>
              </div>
            </div>

            <div class="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition border-l-4 border-transparent hover:border-bm-red">
              <div class="shrink-0 w-12 h-12 bg-red-100 text-bm-red rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h4 class="font-bold text-bm-blue text-lg">Marca Registrada (INPI)</h4>
                <p class="text-sm text-gray-500 mt-1">
                  Sua logomarca deve ser registrada oficialmente no órgão de propriedade intelectual (INPI no Brasil). O certificado VMC é emitido apenas para o proprietário legal da marca.
                </p>
              </div>
            </div>

            <div class="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition border-l-4 border-transparent hover:border-bm-blue">
              <div class="shrink-0 w-12 h-12 bg-blue-100 text-bm-blue rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h4 class="font-bold text-bm-blue text-lg">Logo em Formato SVG Tiny PS</h4>
                <p class="text-sm text-gray-500 mt-1">
                  A imagem deve estar no formato vetorial específico (.svg profile Tiny Portable/Secure). Nossa equipe de design pode ajudar na conversão se necessário.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg sticky top-24 h-fit">
          <h3 class="text-xl font-bold text-bm-blue mb-4">Parece complicado?</h3>
          <p class="text-gray-600 mb-6">
            A maioria das empresas precisa de ajuda na configuração do DMARC e na adequação do SVG. A BMTech oferece a consultoria completa inclusa.
          </p>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-2 text-sm text-gray-700">
              <span class="text-green-500 font-bold">✓</span> Análise gratuita do seu domínio
            </li>
            <li class="flex items-center gap-2 text-sm text-gray-700">
              <span class="text-green-500 font-bold">✓</span> Suporte na configuração do DNS
            </li>
            <li class="flex items-center gap-2 text-sm text-gray-700">
              <span class="text-green-500 font-bold">✓</span> Validação expressa junto à DigiCert
            </li>
          </ul>

          <button (click)="openContactModal('Consultoria e Cotação VMC', $event)" class="block w-full bg-bm-blue text-white text-center py-4 rounded-lg font-bold hover:bg-blue-900 transition shadow-md">
            Falar com Especialista VMC
          </button>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-bm-blue mb-2">Perguntas Frequentes</h2>
          <p class="text-gray-500">Tire suas dúvidas técnicas sobre a implementação.</p>
        </div>

        <div class="space-y-4">
          <details class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 group cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-bm-blue list-none">
              O VMC funciona em todos os e-mails?
              <span class="transition group-open:rotate-180">▼</span>
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
              O VMC é suportado pelos principais provedores: Gmail, Apple Mail (iOS e macOS), Yahoo! e Fastmail. Clientes como Outlook ainda não dão suporte nativo ao BIMI, mas verão o e-mail normalmente.
            </p>
          </details>

          <details class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 group cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-bm-blue list-none">
              Quanto tempo demora para emitir?
              <span class="transition group-open:rotate-180">▼</span>
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
              Após a compra, o processo de validação da DigiCert leva entre 1 a 3 dias úteis, desde que sua marca já esteja registrada no INPI e seu DMARC esteja configurado corretamente.
            </p>
          </details>

          <details class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 group cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-bm-blue list-none">
              O que acontece se eu não tiver o DMARC configurado?
              <span class="transition group-open:rotate-180">▼</span>
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
              O VMC não será ativado. O padrão BIMI exige segurança máxima. A BMTech pode ajudar sua equipe de TI a implementar o DMARC gradualmente (monitoramento -> quarentena -> rejeição) para não afetar o fluxo de e-mails.
            </p>
          </details>

          <details class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 group cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-bm-blue list-none">
              Posso usar qualquer imagem como logo?
              <span class="transition group-open:rotate-180">▼</span>
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
              Não. A imagem deve ser exatamente igual à marca registrada no INPI. Além disso, tecnicamente ela deve ser um arquivo .SVG no perfil "Tiny PS" (Portable/Secure), sem scripts ou links externos.
            </p>
          </details>
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
          
          @if (activeModal() === 'CONTACT') {
            <div>
              <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Solicitar Orçamento</h3>
              <p class="text-gray-600 mb-6">Preencha os dados abaixo para receber uma proposta comercial e orientações sobre a solução <strong>{{ selectedProductName() }}</strong>.</p>
              
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
                  <input type="text" name="product_subject" [value]="selectedProductName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Detalhes do Projeto (Opcional)</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Você já possui a marca registrada no INPI e a política DMARC ativada?" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
        </div>
      </div>
    }
  `
})
export class VmcComponent {
  private sanitizer = inject(DomSanitizer);
  videoId = 'hUupCq4m5AU';

  get safeVideoUrl(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.videoId}?rel=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  partnerGroups = signal([
    {
      category: 'SSL',
      items: [
        { name: 'Sectigo', img: 'partners/sectigo.svg', url: '/solutions/sectigo' },
        { name: 'KeyTalk', img: 'partners/keytalk.svg', url: '/solutions/keytalk' }
      ]
    },
    {
      category: 'Assinatura Digital',
      items: [
        { name: 'PFX', img: 'partners/pfx.svg', url: '/solutions/portal-flex' },
      ]
    },
    {
      category: 'Monitoramento',
      items: [
        { name: 'Teramind', img: 'partners/teramind.svg', url: '/solutions/teramind' },
        { name: 'Hexnode', img: 'partners/hexnode.svg', url: '/solutions/hexnode' },
        { name: 'KickIdler', img: 'partners/kickidler.png', url: '/solutions/kickidler' }
      ]
    }
  ]);

  activeModal = signal<'CONTACT' | null>(null);
  selectedProductName = signal<string>('');
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  openContactModal(productName: string, event: Event) {
    event.preventDefault();
    this.selectedProductName.set(productName);
    this.activeModal.set('CONTACT');
    this.submitSuccess.set(false);
    document.body.style.overflow = 'hidden';
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
}