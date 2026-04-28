import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare global {
  interface Window {
    forge?: {
      pki: {
        certificationRequestFromPem: (pem: string) => any;
        publicKeyToPem: (key: unknown) => string;
        publicKeyFromPem: (pem: string) => any;
      };
      asn1?: unknown;
    };
  }
}

type DecodedCsr = {
  subjectCN?: string;
  organization?: string;
  organizationalUnit?: string;
  emailAddress?: string;
  locality?: string;
  state?: string;
  country?: string;
  sans: string[];
  publicKey: string;
  keyAlgorithm: string;
  keyStrength: string;
};

@Component({
  selector: 'app-csr-decoder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
            <span class="w-2 h-2 bg-bm-blue rounded-full animate-pulse"></span> Ferramentas BMTech
          </span>
          <h1 class="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            CSR Decoder
          </h1>
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Cole a sua <strong>Certificate Signing Request</strong> para validar, rapidamente, o domínio, a Chave 
            Pública e outros detalhes opcionais da solicitação, antes da emissão definitiva do certificado.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-100 py-16 text-gray-900">
      <div class="container mx-auto px-6">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">
            <div class="mb-6">
              <div>
                <h2 class="text-2xl font-bold text-bm-blue">Insira a CSR</h2>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  Aceita os formatos "<code>BEGIN CERTIFICATE REQUEST</code>" e
                  "<code>BEGIN NEW CERTIFICATE REQUEST</code>".
                </p>
              </div>
            </div>

            <label for="csrInput" class="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-600">
              CSR PEM
            </label>
            <textarea
              id="csrInput"
              [(ngModel)]="csrInput"
              spellcheck="false"
              placeholder="-----BEGIN CERTIFICATE REQUEST-----\n...\n-----END CERTIFICATE REQUEST-----"
              class="min-h-[360px] w-full rounded-2xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm leading-6 text-cyan-100 outline-none transition focus:border-bm-blue focus:ring-4 focus:ring-blue-100"
            ></textarea>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                (click)="decodeCSR()"
                [disabled]="isLoadingForge()"
                class="rounded-xl bg-bm-red px-6 py-3 font-bold text-white shadow-lg shadow-red-900/20 transition hover:-translate-y-0.5 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {{ isLoadingForge() ? 'Carregando...' : 'Decodificar CSR' }}
              </button>
              <button
                type="button"
                (click)="reset()"
                class="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-600 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Limpar
              </button>
            </div>

            @if (errorMessage()) {
              <div class="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <p class="font-bold">Ocorreu um erro. Por favor, tente novamente.</p>
                <p class="mt-1">{{ errorMessage() }}</p>
              </div>
            }
          </div>

          <div class="space-y-6">
            <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">
              <h2 class="text-2xl font-bold text-bm-blue">Resultado</h2>
              <p class="mt-2 text-sm text-slate-600">
                Os campos abaixo são extraídos localmente no navegador.
              </p>

              @if (decodedCsr()) {
                <div class="mt-8 space-y-4">
                  <div class="grid gap-4 sm:grid-cols-2">
                    <div class="result-card">
                      <span class="result-label">Common Name</span>
                      <span class="result-value">{{ decodedCsr()?.subjectCN || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Organization</span>
                      <span class="result-value">{{ decodedCsr()?.organization || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Organizational Unit</span>
                      <span class="result-value">{{ decodedCsr()?.organizationalUnit || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">E-mail</span>
                      <span class="result-value">{{ decodedCsr()?.emailAddress || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Locality</span>
                      <span class="result-value">{{ decodedCsr()?.locality || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">State</span>
                      <span class="result-value">{{ decodedCsr()?.state || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Country</span>
                      <span class="result-value">{{ decodedCsr()?.country || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Key</span>
                      <span class="result-value">{{ decodedCsr()?.keyAlgorithm }} {{ decodedCsr()?.keyStrength }}</span>
                    </div>
                  </div>

                  <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <span class="result-label">Subject Alternative Names</span>
                    @if (decodedCsr()?.sans?.length) {
                      <div class="mt-3 flex flex-wrap gap-2">
                        @for (san of decodedCsr()?.sans || []; track san) {
                          <span class="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                            {{ san }}
                          </span>
                        }
                      </div>
                    } @else {
                      <p class="mt-3 text-sm text-slate-500">Nenhum SAN encontrado nesta solicitação.</p>
                    }
                  </div>

                  <div class="rounded-2xl border border-slate-200 bg-slate-950 p-5">
                    <div class="mb-3 flex items-center justify-between gap-4">
                      <span class="result-label !text-slate-300">Public Key PEM</span>
                      <button
                        type="button"
                        (click)="copyPublicKey()"
                        class="rounded-full border border-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                      >
                        {{ copyStatus() || 'Copiar' }}
                      </button>
                    </div>
                    <pre class="overflow-x-auto whitespace-pre-wrap break-all font-mono text-xs leading-6 text-cyan-100">{{ decodedCsr()?.publicKey }}</pre>
                  </div>
                </div>
              } @else {
                <div class="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                  Cole uma CSR válida e clique em <strong>Decodificar CSR</strong> para ver os
                  detalhes aqui.
                </div>
              }
            </div>

            <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
              <h3 class="text-lg font-bold text-bm-blue">O que verificamos:</h3>
              <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <li>O formato da solicitação - PEM (<em>Privacy Enhanced Mail</em>) </li>
                <li><em>Common Name</em> e outras informações preenchidas no corpo da solicitação</li>
                <li>Algoritmo e tamanho da Chave Pública</li>
                <li><em>Subject Alternative Names</em> presentes na solicitação</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .result-card {
      @apply rounded-2xl border border-slate-200 bg-slate-50 p-4;
    }

    .result-label {
      @apply block text-xs font-bold uppercase tracking-[0.18em] text-slate-500;
    }

    .result-value {
      @apply mt-2 block break-words text-sm font-semibold text-slate-800;
    }
  `]
})
export class CsrDecoderComponent implements OnInit {
  csrInput = '';
  decodedCsr = signal<DecodedCsr | null>(null);
  errorMessage = signal('');
  copyStatus = signal('');
  isLoadingForge = signal(true);

  async ngOnInit() {
    try {
      await this.ensureForgeLoaded();
    } catch (error) {
      console.error('Something went wrong. Please, try again.', error);
      this.errorMessage.set(
        'Something went wrong. Please, try again.',
      );
    } finally {
      this.isLoadingForge.set(false);
    }
  }

  reset() {
    this.csrInput = '';
    this.decodedCsr.set(null);
    this.errorMessage.set('');
    this.copyStatus.set('');
  }

  async copyPublicKey() {
    const publicKey = this.decodedCsr()?.publicKey;
    if (!publicKey) {
      return;
    }

    try {
      await navigator.clipboard.writeText(publicKey);
      this.copyStatus.set('Copied');
      setTimeout(() => this.copyStatus.set(''), 2000);
    } catch (error) {
      console.error('Failed to copy public key.', error);
      this.copyStatus.set('Failed');
      setTimeout(() => this.copyStatus.set(''), 2000);
    }
  }

  decodeCSR() {
    this.errorMessage.set('');
    this.copyStatus.set('');

    try {
      const result = this.parseCSR(this.csrInput);
      this.decodedCsr.set(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong.';
      this.decodedCsr.set(null);
      this.errorMessage.set(message);
    }
  }

  private async ensureForgeLoaded() {
    if (window.forge) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>('script[data-forge-csr="true"]');
      if (existingScript) {
        if (window.forge) {
          resolve();
          return;
        }

        existingScript.addEventListener('load', () => resolve(), { once: true });
        existingScript.addEventListener('error', () => reject(new Error('Forge script failed.')), {
          once: true,
        });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/forge/0.10.0/forge.min.js';
      script.async = true;
      script.dataset['forgeCsr'] = 'true';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Forge script failed.'));
      document.head.appendChild(script);
    });
  }

  private parseCSR(csr: string): DecodedCsr {
    const normalizedCsr = csr.trim();

    if (!normalizedCsr) {
      throw new Error('Insira uma CSR antes de tentar decodificar.');
    }

    if (
      !normalizedCsr.includes('-----BEGIN CERTIFICATE REQUEST-----') &&
      !normalizedCsr.includes('-----BEGIN NEW CERTIFICATE REQUEST-----')
    ) {
      throw new Error('Formato de CSR inválido. Verifique o bloco PEM completo.');
    }

    const forge = window.forge;
    if (!forge) {
      throw new Error('Something went wrong.');
    }

    const sanitizedCsr = normalizedCsr
      .replace('BEGIN NEW CERTIFICATE REQUEST', 'BEGIN CERTIFICATE REQUEST')
      .replace('END NEW CERTIFICATE REQUEST', 'END CERTIFICATE REQUEST');

    let csrObject: any;
    try {
      csrObject = forge.pki.certificationRequestFromPem(sanitizedCsr);
    } catch {
      throw new Error('Falha ao interpretar a CSR. Confirme se o conteúdo foi copiado integralmente.');
    }

    const subjectFields: Record<string, string> = {};
    for (const attr of csrObject.subject.attributes ?? []) {
      subjectFields[attr.name || attr.shortName] = attr.value;
      if (attr.shortName) {
        subjectFields[attr.shortName] = attr.value;
      }
    }

    const publicKeyPem = forge.pki.publicKeyToPem(csrObject.publicKey);
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const { algorithm, strength } = this.getKeyDetails(publicKey);

    return {
      subjectCN: subjectFields['commonName'] || subjectFields['CN'],
      organization: subjectFields['organizationName'] || subjectFields['O'],
      organizationalUnit: subjectFields['organizationalUnitName'] || subjectFields['OU'],
      emailAddress: subjectFields['emailAddress'],
      locality: subjectFields['localityName'] || subjectFields['L'],
      state: subjectFields['stateOrProvinceName'] || subjectFields['ST'],
      country: subjectFields['countryName'] || subjectFields['C'],
      sans: this.extractSans(csrObject),
      publicKey: publicKeyPem,
      keyAlgorithm: algorithm,
      keyStrength: strength,
    };
  }

  private getKeyDetails(publicKey: any) {
    if (publicKey?.n?.bitLength) {
      return {
        algorithm: 'RSA',
        strength: `${publicKey.n.bitLength()} bits`,
      };
    }

    if (publicKey?.ecparams?.name) {
      return {
        algorithm: 'EC',
        strength: publicKey.ecparams.name,
      };
    }

    return {
      algorithm: 'Desconhecido',
      strength: 'Não identificado',
    };
  }

  private extractSans(csrObject: any): string[] {
    const extensionRequest = (csrObject.attributes ?? []).find(
      (attribute: any) => attribute.name === 'extensionRequest',
    );

    const sanExtension = extensionRequest?.extensions?.find(
      (extension: any) => extension.name === 'subjectAltName',
    );

    if (!sanExtension?.altNames?.length) {
      return [];
    }

    return sanExtension.altNames
      .map((altName: any) => {
        if (altName.type === 2) {
          return altName.value;
        }

        if (altName.type === 7 && altName.ip) {
          return altName.ip;
        }

        return altName.value || '';
      })
      .filter(Boolean);
  }
}
