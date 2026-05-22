import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser'; 

@Component({
  selector: 'app-hexnode',
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
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-purple-200 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span> Unified Endpoint Management
          </div>
          
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Controle total sobre <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">todos os dispositivos</span>.
          </h1>
          
          <p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Com o <strong>Hexnode UEM</strong> e a consultoria especializada da BMTech, a sua equipe de TI gerencia smartphones, tablets, notebooks e totens de qualquer lugar, a partir de um único painel corporativo.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="openContactModal('Hexnode UEM', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-[0_4px_20px_rgba(220,38,38,0.4)] transform hover:-translate-y-1">
              Agendar Demonstração
            </button>
            <button (click)="openContactModal('Teste de 15 dias - HexNode', $event)" class="bg-white hover:bg-gray-100 text-bm-blue px-6 py-3 md:px-8 md:py-4 rounded font-bold transition shadow-lg whitespace-nowrap">
              Teste de 15 Dias
            </button>
          </div>
        </div>

        <div class="hidden lg:flex justify-center relative perspective-1000">
          <div class="relative w-[130%] max-w-none -mr-20 rounded-2xl overflow-hidden transform rotate-y-[-5deg] hover:rotate-y-0 hover:scale-105 transition-all duration-700">
             <img src="hexnode.png" alt="Painel de Controle Hexnode UEM" class="w-full h-auto object-cover">
          </div>
          <div class="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full -z-10"></div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white border-b border-gray-100 shadow-sm relative z-20 -mt-4 rounded-t-3xl">
      <div class="container mx-auto px-6 text-center">
        <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Uma única plataforma para qualquer sistema operacional</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div class="flex items-center gap-2 font-bold text-xl text-gray-800"><i class="fab fa-apple"></i> iOS & macOS</div>
          <div class="flex items-center gap-2 font-bold text-xl text-gray-800"><i class="fab fa-android"></i> Android</div>
          <div class="flex items-center gap-2 font-bold text-xl text-gray-800"><i class="fab fa-windows"></i> Windows 11</div>
          <div class="flex items-center gap-2 font-bold text-xl text-gray-800"><i class="fas fa-tv"></i> tvOS & Fire OS</div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Recursos de Classe Corporativa</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600 text-lg">Automatize a entrega de equipamentos, aplique políticas rigorosas e garanta a conformidade de segurança de toda a frota de dispositivos da sua empresa.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-300 transition-all group">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Zero-Touch Enrollment</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Entregue dispositivos lacrados na casa do funcionário. Assim que ele ligar o aparelho e conectar à internet, o Hexnode aplica todas as configurações corporativas automaticamente, sem a TI precisar tocar no equipamento.</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all group">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Modo Quiosque (Kiosk)</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Bloqueie tablets e smartphones em um único aplicativo (ou grupo restrito). Transforme dispositivos comuns em terminais de Ponto de Venda (PDV), totens de autoatendimento ou ferramentas dedicadas para motoristas de logística.</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-300 transition-all group">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Gerenciamento de Aplicativos</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Instale, atualize ou remova aplicativos de forma silenciosa e remota (sem interação do usuário). Crie uma App Store Corporativa privada e bloqueie a instalação de apps não autorizados (como jogos ou redes sociais).</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all group">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Geofencing & Rastreamento</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Rastreie a localização exata da sua frota em tempo real. Crie "Cercas Virtuais" geográficas que bloqueiam automaticamente o acesso a dados corporativos caso o aparelho saia do perímetro permitido.</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-300 transition-all group">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Segurança e Conformidade (LGPD)</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Force o uso de senhas fortes, ative a criptografia de disco (BitLocker / FileVault) e restrinja recursos físicos do hardware, como o uso da câmera, gravador de áudio ou portas USB.</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all group">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Wipe Remoto (Apagar Dados)</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Em caso de roubo, perda ou desligamento de um funcionário, bloqueie o aparelho imediatamente e dispare um comando para apagar (Wipe) todos os dados corporativos à distância.</p>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between mb-12">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-bold text-bm-blue mb-4">Hexnode na Prática: Casos de Uso</h2>
            <p class="text-gray-600 text-lg">Veja como empresas brasileiras estão utilizando o UEM para resolver desafios reais do dia a dia.</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="border border-gray-200 p-6 rounded-xl hover:border-purple-500 transition-colors">
            <div class="text-purple-600 mb-4"><i class="fas fa-truck text-3xl"></i></div>
            <h4 class="font-bold text-lg text-gray-900 mb-2">Logística e Transporte</h4>
            <p class="text-sm text-gray-600">Smartphones de motoristas bloqueados (Kiosk) apenas no app de rotas e ERP. Rastreamento GPS contínuo e bloqueio de uso enquanto o veículo está em movimento.</p>
          </div>
          <div class="border border-gray-200 p-6 rounded-xl hover:border-purple-500 transition-colors">
            <div class="text-purple-600 mb-4"><i class="fas fa-store text-3xl"></i></div>
            <h4 class="font-bold text-lg text-gray-900 mb-2">Varejo e PDV</h4>
            <p class="text-sm text-gray-600">Tablets transformados em catálogos digitais interativos para clientes nas lojas, sem risco de acesso à internet ou configurações do sistema.</p>
          </div>
          <div class="border border-gray-200 p-6 rounded-xl hover:border-purple-500 transition-colors">
            <div class="text-purple-600 mb-4"><i class="fas fa-hospital text-3xl"></i></div>
            <h4 class="font-bold text-lg text-gray-900 mb-2">Saúde (Clínicas)</h4>
            <p class="text-sm text-gray-600">Dispositivos de médicos e enfermeiros altamente criptografados, garantindo a privacidade dos dados de pacientes e total conformidade com a LGPD e HIPAA.</p>
          </div>
          <div class="border border-gray-200 p-6 rounded-xl hover:border-purple-500 transition-colors">
            <div class="text-purple-600 mb-4"><i class="fas fa-briefcase text-3xl"></i></div>
            <h4 class="font-bold text-lg text-gray-900 mb-2">Mundo Corporativo</h4>
            <p class="text-sm text-gray-600">Separação clara entre os dados pessoais do funcionário e os dados da empresa (BYOD). Se o funcionário sair, a TI apaga apenas a "pasta corporativa".</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900">
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-4 text-white">Por que licenciar o Hexnode com a BMTech?</h2>
          <p class="text-gray-300 text-lg">Nós não vendemos apenas a licença do software. Entregamos a solução operando perfeitamente no seu ambiente, com condições comerciais exclusivas para o Brasil.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-12 text-center text-white">
          <div class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h4 class="text-xl font-bold mb-3">Setup Guiado pela BMTech</h4>
            <p class="text-gray-300 text-sm">Nossa equipe de suporte realiza reuniões de <i>Onboarding</i> para ajudar a configurar as políticas de segurança, integrar com seu Active Directory e conectar os primeiros aparelhos.</p>
          </div>
          <div class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h4 class="text-xl font-bold mb-3">Suporte N1/N2 Nacional</h4>
            <p class="text-gray-300 text-sm">Problemas acontecem. Tenha acesso direto ao suporte técnico da BMTech via ticket e telefone em português, eliminando barreiras de idioma e fuso horário do fabricante.</p>
          </div>
          <div class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h4 class="text-xl font-bold mb-3">Faturamento em Reais (BRL)</h4>
            <p class="text-gray-300 text-sm">Esqueça o cartão de crédito corporativo e o IOF. Faturamos o contrato no Brasil, em Reais, com emissão de Nota Fiscal (NF-e) e pagamento via boleto bancário.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Assuma o controle definitivo dos seus dispositivos</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Agende uma Prova de Conceito (PoC) gratuita com a BMTech. Vamos desenhar as políticas de segurança e provar o valor do Hexnode UEM operando diretamente no seu ambiente.
        </p>
        <button (click)="openContactModal('Hexnode UEM', $event)" class="bg-red-600 hover:bg-red-800 text-white px-10 py-4 rounded font-bold transition shadow-lg text-lg transform hover:-translate-y-1">
          Solicitar Proposta e Demonstração
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
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Quantos dispositivos pretende gerenciar? São celulares ou tablets?" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
export class HexnodeComponent {

  partners = signal([
    { name: 'Sectigo', img: 'partners/sectigo.svg' },
    { name: 'Teramind', img: 'partners/teramind.svg' },
    { name: 'Hexnode', img: 'partners/hexnode.svg' },
    { name: 'KickIdler', img: 'partners/kickidler.png' },
    { name: 'Portal Flex', img: 'partners/pfx.svg' },
    { name: 'Keytalk', img: 'partners/keytalk.svg' }
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