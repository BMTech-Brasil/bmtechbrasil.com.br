import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-monitoramento',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-8 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Visibilidade & Controle
        </div>
        
        <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Monitoramento e Prevenção <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-bm-red">de Perda de Dados (DLP)</span>.
        </h1>
        
        <p class="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
          Proteja as informações sensíveis da sua empresa, faça a gestão de todos os dispositivos móveis corporativos e impulsione a produtividade da sua equipa, quer estejam no escritório ou em trabalho remoto.
        </p>
      </div>
    </section>

    <section class="py-16 bg-white border-b border-gray-100">
      <div class="container mx-auto px-6 max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-bm-blue mb-4">Escolha a solução ideal para o seu desafio</h2>
        <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
        <p class="text-gray-600 text-lg">
          Não existe uma ferramenta única que sirva para todas as situações. A BMTech oferece um portfólio robusto com as melhores plataformas globais para garantir que o seu ambiente corporativo se mantém produtivo, auditável e 100% seguro contra fugas de informação.
        </p>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-3 gap-10 items-stretch">
          
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-2 bg-orange-500"></div>
            <div class="p-8 flex-grow flex flex-col">
              <div class="flex justify-between items-start mb-6">
                <img src="partners/teramind.svg" alt="Teramind" class="h-10 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="hidden font-bold text-xl text-gray-800 tracking-wider">TERAMIND</span>
                <span class="bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full border border-orange-200">DLP & Insider Threat</span>
              </div>
              
              <h3 class="text-2xl font-bold text-orange-600 mb-3">Teramind DLP</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                A plataforma mais poderosa para Prevenção de Perda de Dados (DLP) e Análise de Comportamento de Utilizadores (UBA). Ideal para detetar ameaças internas, impedir que ficheiros confidenciais saiam da empresa por email, pen drives ou nuvem, e gravar ecrãs em vídeo para auditoria legal.
              </p>
              
              <ul class="space-y-2 mb-8 text-sm text-gray-600">
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Prevenção contra Fuga de Dados</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Reconhecimento Ótico de Carateres (OCR)</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Bloqueio automático de ações suspeitas</li>
              </ul>
              
              <a routerLink="/solutions/teramind" class="block w-full text-center bg-gray-50 border border-gray-200 text-orange-600 py-3 rounded-lg font-bold group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors mt-auto">
              Conhecer o Teramind &rarr;
              </a>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-2 bg-green-500"></div>
            <div class="p-8 flex-grow flex flex-col">
              <div class="flex justify-between items-start mb-6">
                <img src="partners/kickidler.png" alt="Kickidler" class="h-10 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="hidden font-bold text-xl text-gray-500 tracking-wider">KICKIDLER</span>
                <span class="bg-green-50 text-green-500 text-xs font-bold px-3 py-1 rounded-full border border-green-100">Produtividade</span>
              </div>
              
              <h3 class="text-2xl font-bold text-green-500 mb-3">Kickidler</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                A solução definitiva para monitoramento de funcionários de nova geração. Focada na análise de produtividade, rastreamento de tempo de trabalho (time tracking) e controlo de assiduidade. Excelente para gerir equipas remotas ou híbridas com relatórios detalhados de eficiência.
              </p>
              
              <ul class="space-y-2 mb-8 text-sm text-gray-600">
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Visualização de ecrãs em tempo real (Grade)</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Análise detalhada de produtividade</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Registo de teclas (Keylogger) e Controlo Remoto</li>
              </ul>
              
               <a routerLink="/solutions/kickidler" class="block w-full text-center bg-gray-50 border border-gray-200 text-green-600 py-3 rounded-lg font-bold group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors mt-auto">
              Conhecer o KickIdler &rarr;
              </a>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-2 bg-purple-600"></div>
            <div class="p-8 flex-grow flex flex-col">
              <div class="flex justify-between items-start mb-6">
                <img src="partners/hexnode.svg" alt="Hexnode" class="h-10 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="hidden font-bold text-xl text-gray-800 tracking-wider">HEXNODE</span>
                <span class="bg-purple-50 text-purple-600 text-xs font-bold px-3 py-1 rounded-full border border-purple-100">UEM / MDM</span>
              </div>
              
              <h3 class="text-2xl font-bold text-purple-600 mb-3">Hexnode UEM</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Plataforma de Gestão Unificada de Endpoints (UEM). Fundamental se a sua empresa fornece telemóveis, tablets ou computadores aos funcionários. Permite bloquear, limpar dados à distância, forçar atualizações e criar "Modo Quiosque" (Kiosk Mode) para dispositivos de ponto de venda ou logística.
              </p>
              
              <ul class="space-y-2 mb-8 text-sm text-gray-600">
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Gestão de Android, iOS, Windows e Mac</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Kiosk Mode (Bloqueio em uma única App)</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Implantação de Apps e políticas de segurança</li>
              </ul>
              
              <a routerLink="/solutions/hexnode" class="block w-full text-center bg-gray-50 border border-gray-200 text-purple-600 py-3 rounded-lg font-bold group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors mt-auto">
              Conhecer o Hexnode &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-900 text-center relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl font-bold text-white mb-6">Dúvidas sobre qual ferramenta adotar?</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          A nossa equipa de arquitetos de segurança realiza uma avaliação gratuita do seu ambiente e recomenda a solução com melhor custo-benefício para a sua empresa.
        </p>
        <button class="bg-bm-red text-white px-10 py-4 rounded font-bold text-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
          Falar com um Consultor BMTech
        </button>
      </div>
    </section>
  `
})
export class MonitoramentoComponent {

    partners = signal([
    { name: 'Sectigo', img: 'partners/sectigo.svg' },
    { name: 'Teramind', img: 'partners/teramind.svg' },
    { name: 'Hexnode', img: 'partners/hexnode.svg' },
    { name: 'KickIdler', img: 'partners/kickidler.png' },
    { name: 'Portal Flex', img: 'partners/pfx.svg' },
    { name: 'Keytalk', img: 'partners/keytalk.svg' }
  ]);
}