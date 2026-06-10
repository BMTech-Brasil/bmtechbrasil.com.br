import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-scm',
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
      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider">
              <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Sectigo Certificate Manager
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              A automação definitiva para <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Certificados Digitais</span>.
            </h1>
            
            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
              O <strong>Sectigo Certificate Manager (SCM)</strong> descobre, gere e automatiza a renovação de toda a sua infraestrutura de certificados Sectigo, evitando falhas sistémicas e simplificando o trabalho da sua equipa de TI.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <button (click)="openContactModal('Sectigo SCM - Demonstração', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
                Agendar Demonstração SCM
              </button>
              <button (click)="openContactModal('Consultoria Sectigo SCM', $event)" class="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded font-bold transition flex items-center justify-center gap-2">
                Falar com Especialista
              </button>
            </div>
          </div>
          <div class="relative group perspective-1000 hidden lg:block">
            <div class="rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] overflow-hidden relative z-10 transform transition-transform duration-500 hover:scale-105 border border-white/10 bg-gray-900"> 
              <img src="scm.png" alt="Sectigo SCM Dashboard" class="w-full h-auto object-cover" onerror="this.src='https://placehold.co/800x450/111827/06b6d4?text=Sectigo+SCM+Dashboard'">
            </div>
            <div class="absolute -inset-4 bg-cyan-500/20 blur-3xl -z-10 rounded-full animate-pulse"></div>
         </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 border-b border-gray-100 shadow-sm relative z-20 -mt-2">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">Zero</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Downtime por Expiração</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">100%</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Visibilidade da Rede</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">Agil</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Gestão num só painel</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">DevOps</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Integração Nativa</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1 relative">
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-red-100 relative">
               <div class="absolute -top-4 -left-4 w-12 h-12 bg-bm-red rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
               </div>
               <h3 class="text-xl font-bold text-gray-800 mb-4">O risco da gestão manual</h3>
               <div class="space-y-4">
                 <div class="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded border border-red-100">
                   <span class="font-bold">❌</span> <span>Planilhas de Excel desatualizadas</span>
                 </div>
                 <div class="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded border border-red-100">
                   <span class="font-bold">❌</span> <span>Certificados "invisíveis" (Shadow IT)</span>
                 </div>
                 <div class="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded border border-red-100">
                   <span class="font-bold">❌</span> <span>Sistemas fora do ar (Prejuízo)</span>
                 </div>
               </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-bm-blue mb-6">A gestão manual já não é sustentável.</h2>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Com as novas políticas de segurança globais, o tempo de vida dos certificados SSL/TLS públicos diminuiu consideravelmente. Acompanhar dezenas ou centenas de certificados manualmente é um convite a falhas humanas e interrupções de serviço críticas.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              Com o <strong>Sectigo Certificate Manager</strong>, a sua equipa de TI muda o foco: deixa de apagar incêndios e passa a governar a criptografia corporativa de forma inteligente e automatizada.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white border-b border-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Como o SCM resolve os seus problemas</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
            <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-bm-blue">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Discovery Automático</h3>
            <p class="text-gray-600 text-sm">Faça varreduras na sua rede e encontre todos os certificados Sectigo instalados. Mantenha um inventário sempre atualizado.</p>
          </div>
          <div class="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
            <div class="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-bm-red">
               <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Renovação Zero-Touch</h3>
            <p class="text-gray-600 text-sm">Automatize o ciclo completo (emissão, renovação, instalação) utilizando protocolos nativos da indústria como ACME, SCEP e REST APIs.</p>
          </div>
          <div class="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
            <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-bm-blue">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Plataforma Unificada</h3>
            <p class="text-gray-600 text-sm">Gira todos os seus ativos da Sectigo (SSL Público, PKI Privada, S/MIME, Code Signing) a partir de um único Painel de Controle.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-blue-50 relative overflow-hidden">
      <div class="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-100 opacity-50">
        <svg class="w-96 h-96" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="text-bm-blue font-bold tracking-widest uppercase mb-4 block text-sm">Estratégia Completa de Segurança</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quer ir além da ferramenta e entender o conceito de <span class="text-bm-red">Sectigo CLM</span>?
          </h2>
          <p class="text-gray-600 mb-10 text-lg leading-relaxed">
            O SCM é o seu painel de comando, mas o <strong>Certificate Lifecycle Management (CLM)</strong> é a solução arquitetónica que protege cada identidade da sua empresa. Descubra como garantir a segurança de ponta a ponta com o ecossistema Sectigo.
          </p>
          
          <a routerLink="/solutions/clm" class="inline-flex items-center gap-3 bg-white border-2 border-bm-blue text-bm-blue px-8 py-4 rounded font-bold hover:bg-bm-blue hover:text-white transition group shadow-md hover:shadow-xl">
            Conhecer o Sectigo CLM
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-900 text-center relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl font-bold text-white mb-6">Assuma o controle da sua Segurança Digital</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Fale com a nossa equipe e descubra como implementar o Sectigo Certificate Manager (SCM) e automatizar 100% da sua infraestrutura de certificados.
        </p>
        <button (click)="openContactModal('Sectigo SCM - Assessment', $event)" class="bg-bm-red text-white px-10 py-4 rounded font-bold text-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
          Solicitar Assessment e Demo
        </button>
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
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Conte-nos sobre sua necessidade" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
export class ScmComponent {
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