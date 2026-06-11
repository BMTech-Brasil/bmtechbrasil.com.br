import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kickidler',
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
        <div>
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-green-200 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Monitoramento de Produtividade
          </div>
          
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Supervisione equipes e melhore a <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">produtividade empresarial</span>.
          </h1>
          
          <p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Com o <strong>Kickidler</strong> e a implementação especializada da BMTech, sua empresa pode monitorar a atividade dos colaboradores, analisar tempos produtivos e improdutivos e otimizar a gestão de equipes presenciais, remotas ou híbridas.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="openContactModal('Kickidler', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-[0_4px_20px_rgba(220,38,38,0.4)] transform hover:-translate-y-1 track-abrir-modal">
              Agendar Demonstração
            </button>
            <button (click)="openContactModal('Teste de 15 dias - KickIdler', $event)" class="bg-white hover:bg-gray-100 text-bm-blue px-6 py-3 md:px-8 md:py-4 rounded font-bold transition shadow-lg whitespace-nowrap track-abrir-modal">
              Teste de 15 Dias
            </button>
            <button (click)="scrollToFeatures($event)" class="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded font-bold transition track-abrir-modal">
              Ver Funcionalidades
            </button>
          </div>
        </div>

        <div class="hidden lg:flex justify-center relative perspective-1000">
          <div class="relative w-[120%] max-w-none -mr-12 rounded-2xl overflow-hidden transform rotate-y-[-5deg] hover:rotate-y-0 hover:scale-105 transition-all duration-700 shadow-2xl border border-white/10">
             <img src="kickidlerpannel.png" alt="Painel de Controle Kickidler" class="w-full h-auto object-cover">
          </div>
          <div class="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full -z-10"></div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white border-b border-gray-100 shadow-sm relative z-20 -mt-4 rounded-t-3xl">
      <div class="container mx-auto px-6 text-center">
        <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Monitoramento inteligente para diferentes modelos de trabalho</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div class="flex items-center gap-2 font-bold text-xl text-gray-800"><i class="fas fa-building"></i> Presencial</div>
          <div class="flex items-center gap-2 font-bold text-xl text-gray-800"><i class="fas fa-laptop-house"></i> Remoto</div>
          <div class="flex items-center gap-2 font-bold text-xl text-gray-800"><i class="fas fa-users"></i> Híbrido</div>
          <div class="flex items-center gap-2 font-bold text-xl text-gray-800"><i class="fas fa-chart-line"></i> Produtividade</div>
        </div>
      </div>
    </section>

    <section id="features" class="py-24 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-green-800 mb-4">Principais Funcionalidades do Kickidler</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600 text-lg">
            Obtenha visibilidade completa sobre as atividades de trabalho, reduza perdas de tempo e tome decisões baseadas em dados reais de produtividade.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-300 transition-all group">
            <div class="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Monitoramento de Telas ao Vivo</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Visualize em tempo real as telas dos colaboradores a partir de um painel centralizado. Ideal para supervisores, áreas de suporte, operações e equipes remotas.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-300 transition-all group">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Gravação de Atividades</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Registre a atividade das equipes para auditorias, análises internas e revisão de incidentes. Consulte o histórico quando precisar validar processos ou comportamentos.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-300 transition-all group">
            <div class="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Análise de Produtividade</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Classifique aplicativos e sites como produtivos, neutros ou improdutivos. Identifique padrões de trabalho e oportunidades de melhoria por usuário, equipe ou área.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-300 transition-all group">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Controle de Jornada de Trabalho</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Controle horas trabalhadas, pausas, inatividade e tempo efetivo na frente do computador. Gere relatórios confiáveis para gestão operacional e recursos humanos.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-300 transition-all group">
            <div class="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a2 2 0 012-2h8m0 0l-3-3m3 3l-3 3M4 4h6a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Relatórios Automatizados</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Receba relatórios detalhados com indicadores de produtividade, tempos de uso, aplicativos mais utilizados, sites visitados e desempenho por departamento.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-300 transition-all group">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Acesso Remoto e Suporte</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Auxilie usuários remotamente quando necessário. Reduza o tempo de atendimento de incidentes e melhore a experiência de suporte interno.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between mb-12">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-bold text-green-800 mb-4">Kickidler na Prática: Casos de Uso</h2>
            <p class="text-gray-600 text-lg">
              Veja como diferentes áreas podem usar o Kickidler para aumentar a eficiência, melhorar a gestão e proteger a operação diária.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="border border-gray-200 p-6 rounded-xl hover:border-green-500 transition-colors">
            <div class="text-green-600 mb-4"><i class="fas fa-headset text-3xl"></i></div>
            <h4 class="font-bold text-lg text-gray-900 mb-2">Call Centers</h4>
            <p class="text-sm text-gray-600">
              Supervisione agentes em tempo real, analise pausas, reduza tempos improductivos e melhore o cumprimento dos processos de atendimento.
            </p>
          </div>

          <div class="border border-gray-200 p-6 rounded-xl hover:border-green-500 transition-colors">
            <div class="text-green-600 mb-4"><i class="fas fa-laptop-house text-3xl"></i></div>
            <h4 class="font-bold text-lg text-gray-900 mb-2">Trabalho Remoto</h4>
            <p class="text-sm text-gray-600">
              Acompanhe o desempenho de equipes remotas sem depender apenas de reuniões ou relatórios manuais.
            </p>
          </div>

          <div class="border border-gray-200 p-6 rounded-xl hover:border-green-500 transition-colors">
            <div class="text-green-600 mb-4"><i class="fas fa-user-tie text-3xl"></i></div>
            <h4 class="font-bold text-lg text-gray-900 mb-2">Recursos Humanos</h4>
            <p class="text-sm text-gray-600">
              Analise jornadas, ausências, inatividade e carga de trabalho para apoiar decisões de gestão de pessoas.
            </p>
          </div>

          <div class="border border-gray-200 p-6 rounded-xl hover:border-green-500 transition-colors">
            <div class="text-green-600 mb-4"><i class="fas fa-shield-alt text-3xl"></i></div>
            <h4 class="font-bold text-lg text-gray-900 mb-2">Segurança Interna</h4>
            <p class="text-sm text-gray-600">
              Revise atividades suspeitas, valide incidentes e mantenha evidências organizadas para auditorias internas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900">
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-4 text-white">Por que implementar o Kickidler com a BMTech?</h2>
          <p class="text-gray-300 text-lg">
            A BMTech acompanha sua empresa desde o planejamento até a implementação, ajudando a configurar políticas, relatórios e critérios de produtividade de acordo com sua operação.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12 text-center text-white">
          <div class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M5 11h14M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"></path></svg>
            </div>
            <h4 class="text-xl font-bold mb-3">Implementação Guiada</h4>
            <p class="text-gray-300 text-sm">
              Apoiamos na instalação, configuração inicial, criação de grupos, regras de produtividade e painéis para gestores.
            </p>
          </div>

          <div class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h4 class="text-xl font-bold mb-3">Suporte Técnico Local</h4>
            <p class="text-gray-300 text-sm">
              Conte com o suporte da BMTech para dúvidas técnicas, ajustes de configuração, relatórios e acompanhamento durante o uso da plataforma.
            </p>
          </div>

          <div class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17a4 4 0 100-8 4 4 0 000 8zm0 0v4m0-4H7m4 0h4M5 8V6a2 2 0 012-2h8a2 2 0 012 2v2"></path></svg>
            </div>
            <h4 class="text-xl font-bold mb-3">Gestão Orientada a Resultados</h4>
            <p class="text-gray-300 text-sm">
              Ajudamos a transformar os dados de monitoramento em indicadores claros para melhorar a produtividade, compliance e eficiência operacional.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-16 border-y border-gray-200">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-green-800 mb-6">Gestão Responsável e Transparente</h2>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Políticas de monitoramento configuradas conforme as necessidades da sua empresa</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Relatórios objetivos para líderes, gestores e recursos humanos</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Visibilidade operacional para equipes presenciais, remotas e híbridas</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <p class="text-green-800 font-bold text-xl mb-2">Produtividade com Dados Reais</p>
          <p class="text-gray-500 mb-6">
            O Kickidler permite medir, comparar e melhorar a produtividade com informações claras sobre o uso do tempo e das ferramentas de trabalho.
          </p>

          <div class="grid grid-cols-3 gap-4">
            <div class="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p class="text-2xl font-bold text-green-700">24/7</p>
              <p class="text-xs text-gray-500 font-semibold uppercase">Visibilidade</p>
            </div>

            <div class="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p class="text-2xl font-bold text-green-700">+TI</p>
              <p class="text-xs text-gray-500 font-semibold uppercase">Controle</p>
            </div>

            <div class="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p class="text-2xl font-bold text-green-700">+ROI</p>
              <p class="text-xs text-gray-500 font-semibold uppercase">Eficiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Comece a medir e melhorar a produtividade da sua equipe</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Agende uma demonstração com a BMTech e descubra como o Kickidler pode ajudar sua empresa a gerenciar equipes, reduzir tempos improdutivos e tomar melhores decisões operacionais.
        </p>
        <button (click)="openContactModal('Kickidler', $event)" class="bg-red-600 hover:bg-red-800 text-white px-10 py-4 rounded font-bold transition shadow-lg text-lg transform hover:-translate-y-1 track-abrir-modal">
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
              <div class="w-12 h-12 bg-green-50 text-green-700 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-green-800 mb-2">Solicitar Cotação</h3>
              <p class="text-gray-600 mb-6">
                Preencha os dados abaixo para receber uma proposta comercial e orientação sobre a solução <strong>{{ selectedProductName() }}</strong>.
              </p>
              
              <form (submit)="onSubmitContact($event)" class="space-y-4">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nome Completo *</label>
                    <input type="text" name="user_name" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">E-mail Corporativo *</label>
                    <input type="email" name="user_email" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Telefone / WhatsApp *</label>
                    <input type="tel" name="user_phone" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nome da Empresa</label>
                    <input type="text" name="company_name" [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Produto Desejado</label>
                  <input type="text" name="product_subject" [value]="selectedProductName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Detalhes do Projeto (Opcional)</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Quantos usuários deseja monitorar? A equipe trabalha no modelo presencial, remoto ou híbrido?" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition resize-none disabled:opacity-50"></textarea>
                </div>

                <button type="submit" [disabled]="isSubmitting() || submitSuccess()" 
                        [ngClass]="{'bg-green-500 hover:bg-green-600': submitSuccess(), 'bg-green-700 hover:bg-green-800': !submitSuccess()}"
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
export class KickidlerComponent {
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

  scrollToFeatures(event: Event) {
    event.preventDefault();

    const section = document.getElementById('features');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
      console.error('Erro ao enviar o e-mail via EmailJS', error);
      alert('Ocorreu um erro de comunicação. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}