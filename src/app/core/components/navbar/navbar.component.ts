import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div class="container mx-auto px-6 h-20 flex justify-between items-center">
        
        <a routerLink="/" class="flex items-center hover:opacity-90 transition select-none">
          <img src="bmtechlogo.png" alt="BMTech Logo" class="h-12 w-auto object-contain">
        </a>

        <div class="hidden md:flex items-center gap-6 lg:gap-8">
          <a routerLink="/" class="nav-item">Home</a>

          <div class="relative group h-20 flex items-center">
            <button class="nav-item flex items-center gap-1 focus:outline-none">
              Certificados
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div class="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                
                <div class="relative group/sectigo">
                  <a routerLink="/solutions/sectigo" class="flex items-center justify-between w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-bm-red transition-colors font-sans cursor-pointer">
                    <span>Sectigo</span>
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover/sectigo:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>

                  <div class="absolute left-full top-0 w-48 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover/sectigo:opacity-100 group-hover/sectigo:visible transition-all duration-300 transform translate-x-2 group-hover/sectigo:translate-x-0 ml-1">
                    <div class="py-2">
                      <a routerLink="/solutions/scm" class="dropdown-item">SCM</a>
                      <a routerLink="/solutions/vmc" class="dropdown-item">VMC</a>
                    </div>
                  </div>
                </div>

                <a routerLink="/tools/csr-decoder" class="dropdown-item">CSR Decoder</a>
                <a routerLink="/tools/cert-decoder" class="dropdown-item">Certificate Decoder</a>
              </div>
            </div>
          </div>

          <div class="relative group h-20 flex items-center">
            <a routerLink="/solutions/monitoramento" class="nav-item flex items-center gap=1 focus:outline-none cursor-pointer">
              Monitoramento
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>

            <div class="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <a routerLink="/solutions/hexnode" class="dropdown-item">HexNode</a>
                <a routerLink="/solutions/teramind" class="dropdown-item">Teramind</a>
                <a routerLink="/solutions/kickidler" class="dropdown-item">KickIdler</a>
              </div>
            </div>
          </div>

          <a routerLink="/solutions/portal-flex" class="nav-item">Portal Flex</a>
          
          <a href="#" (click)="openContactModal('Contato Geral', $event)" class="bg-bm-red text-white px-6 py-2 rounded font-bold text-sm hover:bg-red-700 transition shadow-md font-sans whitespace-nowrap">
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>

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
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Fale Conosco</h3>
              <p class="text-gray-600 mb-6">Preencha os dados abaixo para entrar em contato com a nossa equipe.</p>
              
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
                  <label class="block text-sm font-bold text-gray-700 mb-1">Assunto</label>
                  <input type="text" name="product_subject" [value]="selectedProductName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Mensagem</label>
                  <textarea name="message" rows="3" required [disabled]="isSubmitting()" placeholder="Como podemos te ajudar hoje?" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
                    Mensagem Enviada!
                  } @else {
                    Enviar Mensagem
                  }
                </button>
              </form>
            </div>
          }
        </div>
      </div>
    }
  `,
  styles: [`
    .nav-item {
      @apply text-sm font-bold text-gray-600 hover:text-bm-blue transition uppercase cursor-pointer font-sans whitespace-nowrap;
    }
    .dropdown-item {
      @apply block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-bm-red transition-colors font-sans;
    }
  `]
})
export class NavbarComponent {
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
