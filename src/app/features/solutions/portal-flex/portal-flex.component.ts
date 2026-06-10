import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portal-flex',
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
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bm-blue via-bm-blue to-transparent z-0"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider">
              <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Paperless & Workflow
            </div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              A plataforma completa para <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">eliminar o papel</span> da sua empresa.
            </h1>
            <p class="text-lg text-white-300 mb-8 leading-relaxed">
              O <strong>Portal Flex</strong> centraliza a assinatura de documentos (Digital e Eletrônica), automação de processos (BPM) e custódia de arquivos em um ambiente seguro e com validade jurídica.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button (click)="openContactModal('Portal Flex - Demonstração', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
                Solicitar Demonstração
              </button>
            </div>
            <div class="mt-8 flex gap-6 text-sm text-white-400 font-medium">
              <div class="flex items-center gap-2">
                <span class="text-green-400">✓</span> ICP-Brasil
              </div>
              <div class="flex items-center gap-2">
                <span class="text-green-400">✓</span> Lei 14.063/20
              </div>
              <div class="flex items-center gap-2">
                <span class="text-green-400">✓</span> LGPD Ready
              </div>
            </div>
          </div>
          <div class="hidden lg:flex justify-center relative perspective-1000">
            <div class="relative w-[130%] max-w-none -mr-20 rounded-2xl overflow-hidden transform rotate-y-[-5deg] hover:rotate-y-0 hover:scale-105 transition-all duration-700">
              <img src="pfxdashboard.png" alt="Painel de Controle Portal Flex" class="w-full h-auto object-cover">
            </div>
            <div class="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 border-b border-gray-100 shadow-sm relative z-20 -mt-2">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">+1 Mi</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Documentos/Mês</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">100%</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Validade Jurídica</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">-80%</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Custos Operacionais</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">Zero</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Papel Impresso</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Soluções integradas para gestão documental</h2>
          <p class="text-gray-500">O Portal Flex não é apenas um assinador. É um ecossistema completo para gerenciar o ciclo de vida dos seus documentos.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bm-blue transition">
              <svg class="w-6 h-6 text-bm-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Assinatura Híbrida</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Combine a segurança máxima do <strong>Certificado Digital (e-CPF/e-CNPJ)</strong> com a praticidade da <strong>Assinatura Eletrônica</strong> (Token, SMS, E-mail).
            </p>
          </div>

          <div class="p-8 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
            <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bm-red transition">
              <svg class="w-6 h-6 text-bm-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Workflow (BPM)</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Desenhe fluxos de aprovação. O documento passa automaticamente de um departamento para outro, com regras de alçada e notificações.
            </p>
          </div>

          <div class="p-8 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bm-blue transition">
              <svg class="w-6 h-6 text-bm-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Arquivo Digital (GED)</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Armazene tudo na nuvem com <strong>Tabela de Temporalidade</strong>. O sistema avisa quando um documento expira e organiza tudo automaticamente.
            </p>
          </div>

          <div class="p-8 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
            <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bm-blue transition">
              <svg class="w-6 h-6 text-bm-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.85.567-4.167"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Biometria Facial</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Adicione uma camada extra de segurança. Exija que o signatário faça o reconhecimento facial antes de assinar contratos sensíveis.
            </p>
          </div>

           <div class="p-8 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
            <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bm-red transition">
              <svg class="w-6 h-6 text-bm-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">API de Integração</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Integre o Portal Flex ao seu ERP (SAP, Totvs, Senior) via API REST. Gere o documento no seu sistema e envie para assinatura automaticamente.
            </p>
          </div>

          <div class="p-8 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
            <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bm-blue transition">
              <svg class="w-6 h-6 text-bm-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">OCR Inteligente</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Digitalize papel e transforme em dados pesquisáveis. Encontre qualquer documento digitando uma palavra que está escrita nele.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-white border-t border-gray-100">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <div class="order-2 lg:order-1 relative">
             <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <div class="space-y-6 relative">
                 <div class="absolute left-9 top-8 bottom-8 w-0.5 bg-gray-200 -z-10"></div>

                 <div class="flex items-center gap-4">
                   <div class="w-10 h-10 bg-bm-blue text-white rounded-full flex items-center justify-center font-bold shadow-md z-10">1</div>
                   <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1">
                     <p class="font-bold text-bm-blue">Envio do Documento</p>
                     <p class="text-xs text-gray-500">Upload PDF ou criação via modelo.</p>
                   </div>
                 </div>
                 
                 <div class="flex items-center gap-4">
                   <div class="w-10 h-10 bg-white border-2 border-bm-blue text-bm-blue rounded-full flex items-center justify-center font-bold shadow-md z-10">2</div>
                   <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1">
                     <p class="font-bold text-gray-700">Coleta de Assinaturas</p>
                     <p class="text-xs text-gray-500">Notificação via E-mail, SMS ou WhatsApp.</p>
                   </div>
                 </div>
                 
                 <div class="flex items-center gap-4">
                   <div class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow-md z-10">✓</div>
                   <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1">
                     <p class="font-bold text-gray-700">Conclusão e Arquivo</p>
                     <p class="text-xs text-gray-500">Guarda legal com carimbo do tempo.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-bm-blue mb-6">Controle total do fluxo de trabalho</h2>
            <p class="text-gray-600 mb-6 text-lg">
              Chega de perder tempo procurando quem precisa assinar o documento. Com o <strong>Portal Flex</strong>, você desenha o caminho que o documento deve percorrer.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="text-green-500 font-bold mt-1">✓</span>
                <p class="text-gray-600"><strong>Notificações Automáticas:</strong> O sistema cobra quem está atrasando a assinatura.</p>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-500 font-bold mt-1">✓</span>
                <p class="text-gray-600"><strong>Painel de Controle:</strong> Veja em tempo real em que etapa está cada processo.</p>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-500 font-bold mt-1">✓</span>
                <p class="text-gray-600"><strong>Compliance:</strong> Garanta que todos os processos sigam as regras da empresa.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <section id="nossas-solucoes" class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Pronto para digitalizar sua empresa?</h2>
        <p class="text-white-100 max-w-2xl mx-auto mb-10 text-lg">
          Fale com nossos especialistas e descubra como o Portal Flex pode reduzir seus custos e aumentar a segurança jurídica dos seus documentos.
        </p>
        <button (click)="openContactModal('Consultoria Portal Flex', $event)" class="bg-bm-red text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-2xl hover:scale-105 transform duration-200">
          Falar com um Consultor
        </button>
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
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Qual o volume mensal de assinaturas estimado?" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
export class PortalFlexComponent {
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