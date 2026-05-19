import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as forge from 'node-forge';

type DecodedCert = {
  subjectCN?: string;
  organization?: string;
  organizationalUnit?: string;
  issuerCN?: string;
  issuerOrganization?: string;
  serialNumber: string;
  validFrom: string;
  validTo: string;
  sans: string[];
  publicKey: string;
  keyAlgorithm: string;
  keyStrength: string;
  signatureAlgorithm: string;
};

type ForgeAttribute = {
  name?: string;
  shortName?: string;
  value?: unknown;
};

type ForgeAltName = {
  type?: number;
  value?: string;
  ip?: string;
};

type ForgeSanExtension = {
  altNames?: ForgeAltName[];
};

@Component({
  selector: 'app-cert-decoder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 pt-32 pb-20 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
            <span class="h-2 w-2 animate-pulse rounded-full bg-bm-blue"></span> Ferramentas BMTech
          </span>
          <h1 class="mt-6 text-4xl font-bold leading-tight md:text-6xl">Certificate Decoder</h1>
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Cole um <strong>Certificado</strong> em formato PEM para verificar o domínio, emissor,
            validade, SANs e detalhes a respeito da Chave Pública diretamente no navegador.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-100 py-16 text-gray-900">
      <div class="container mx-auto px-6">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-bm-blue">Insira o certificado</h2>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                Aceita o formato "<code>BEGIN CERTIFICATE</code>".
              </p>
            </div>

            <label for="certInput" class="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-600">
              Certificate PEM
            </label>
            <textarea
              id="certInput"
              [(ngModel)]="certInput"
              spellcheck="false"
              placeholder="-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"
              class="min-h-[360px] w-full rounded-2xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm leading-6 text-cyan-100 outline-none transition focus:border-bm-blue focus:ring-4 focus:ring-blue-100"
            ></textarea>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                (click)="decodeCertificate()"
                class="rounded-xl bg-bm-red px-6 py-3 font-bold text-white shadow-lg shadow-red-900/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                Decodificar
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
              <div class="flex items-center justify-between gap-4">
                <h2 class="text-2xl font-bold text-bm-blue">Resultado</h2>
                <button
                  type="button"
                  (click)="copyExtractedFields()"
                  [disabled]="!decodedCert()"
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-bm-blue hover:text-bm-blue disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Copiar"
                  title="Copiar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7V5a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2h-2M8 7H7a2 2 0 00-2 2v7a2 2 0 002 2h7a2 2 0 002-2v-1M8 7h7a2 2 0 012 2v7" />
                  </svg>
                </button>
              </div>
              <p class="mt-2 text-sm text-slate-600">
                Os campos abaixo são extraídos localmente no navegador.
              </p>
              @if (fieldsCopyStatus()) {
                <p class="mt-2 text-xs font-bold uppercase tracking-wide text-bm-blue">
                  {{ fieldsCopyStatus() }}
                </p>
              }

              @if (decodedCert()) {
                <div class="mt-8 space-y-4">
                  <div class="grid gap-4 sm:grid-cols-2">
                    <div class="result-card">
                      <span class="result-label">Common Name</span>
                      <span class="result-value">{{ decodedCert()?.subjectCN || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Organization</span>
                      <span class="result-value">{{ decodedCert()?.organization || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Organizational Unit</span>
                      <span class="result-value">{{ decodedCert()?.organizationalUnit || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Serial Number</span>
                      <span class="result-value">{{ decodedCert()?.serialNumber || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Valid From</span>
                      <span class="result-value">{{ decodedCert()?.validFrom }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Valid To</span>
                      <span class="result-value">{{ decodedCert()?.validTo }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Issuer CN</span>
                      <span class="result-value">{{ decodedCert()?.issuerCN || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Issuer Organization</span>
                      <span class="result-value">{{ decodedCert()?.issuerOrganization || 'Não informado' }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Key</span>
                      <span class="result-value">{{ decodedCert()?.keyAlgorithm }} {{ decodedCert()?.keyStrength }}</span>
                    </div>
                    <div class="result-card">
                      <span class="result-label">Signature Algorithm</span>
                      <span class="result-value">{{ decodedCert()?.signatureAlgorithm }}</span>
                    </div>
                  </div>

                  <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <span class="result-label">Subject Alternative Names</span>
                    @if (decodedCert()?.sans?.length) {
                      <div class="mt-3 flex flex-wrap gap-2">
                        @for (san of decodedCert()?.sans || []; track san) {
                          <span
                            class="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                          >
                            {{ san }}
                          </span>
                        }
                      </div>
                    } @else {
                      <p class="mt-3 text-sm text-slate-500">Nenhum SAN encontrado neste certificado.</p>
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
                        {{ publicKeyCopyStatus() || 'Copiar' }}
                      </button>
                    </div>
                    <pre class="overflow-x-auto whitespace-pre-wrap break-all font-mono text-xs leading-6 text-cyan-100">{{ decodedCert()?.publicKey }}</pre>
                  </div>
                </div>
              } @else {
                <div class="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                  Cole um Certificado válido e clique em <strong>Decodificar</strong>
                  para ver os detalhes aqui.
                </div>
              }
            </div>

            @if (!hasDecodedAttempt()) {
              <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                <h3 class="text-lg font-bold text-bm-blue">O que verificamos:</h3>
                <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                  <li>O formato do certificado - PEM (<em>Privacy Enhanced Mail</em>)</li>
                  <li><em>Subject</em>, <em>Common Name</em>, emissor, organização e localidade presentes no certificado</li>
                  <li>Tempo de Vida Útil</li>
                  <li>Algoritmo e tamanho da Chave Pública</li>
                  <li><em>Subject Alternative Names</em></li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .result-card {
        @apply rounded-2xl border border-slate-200 bg-slate-50 p-4;
      }

      .result-label {
        @apply block text-xs font-bold uppercase tracking-[0.18em] text-slate-500;
      }

      .result-value {
        @apply mt-2 block break-words text-sm font-semibold text-slate-800;
      }
    `,
  ],
})
export class CertDecoderComponent {
  certInput = '';
  decodedCert = signal<DecodedCert | null>(null);
  hasDecodedAttempt = signal(false);
  errorMessage = signal('');
  fieldsCopyStatus = signal('');
  publicKeyCopyStatus = signal('');

  reset() {
    this.certInput = '';
    this.decodedCert.set(null);
    this.hasDecodedAttempt.set(false);
    this.errorMessage.set('');
    this.fieldsCopyStatus.set('');
    this.publicKeyCopyStatus.set('');
  }

  decodeCertificate() {
    this.hasDecodedAttempt.set(true);
    this.errorMessage.set('');
    this.fieldsCopyStatus.set('');
    this.publicKeyCopyStatus.set('');

    try {
      const result = this.parseCertificate(this.certInput);
      this.decodedCert.set(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong.';
      this.decodedCert.set(null);
      this.errorMessage.set(message);
    }
  }

  async copyExtractedFields() {
    const decodedCert = this.decodedCert();
    if (!decodedCert) {
      return;
    }

    const extractedFields = [
      `Common Name: ${decodedCert.subjectCN || 'Não informado'}`,
      `Organization: ${decodedCert.organization || 'Não informado'}`,
      `Organizational Unit: ${decodedCert.organizationalUnit || 'Não informado'}`,
      `Serial Number: ${decodedCert.serialNumber || 'Não informado'}`,
      `Valid From: ${decodedCert.validFrom}`,
      `Valid To: ${decodedCert.validTo}`,
      `Issuer CN: ${decodedCert.issuerCN || 'Não informado'}`,
      `Issuer Organization: ${decodedCert.issuerOrganization || 'Não informado'}`,
      `Key: ${decodedCert.keyAlgorithm} ${decodedCert.keyStrength}`,
      `Signature Algorithm: ${decodedCert.signatureAlgorithm}`,
      `Subject Alternative Names: ${
        decodedCert.sans.length ? decodedCert.sans.join(', ') : 'Nenhum SAN encontrado'
      }`,
    ].join('\n');

    await this.copyToClipboard(extractedFields, this.fieldsCopyStatus);
  }

  async copyPublicKey() {
    const publicKey = this.decodedCert()?.publicKey;
    if (!publicKey) {
      return;
    }

    await this.copyToClipboard(publicKey, this.publicKeyCopyStatus);
  }

  private async copyToClipboard(value: string, statusSignal: WritableSignal<string>) {
    try {
      await navigator.clipboard.writeText(value);
      statusSignal.set('Copied');
      setTimeout(() => statusSignal.set(''), 2000);
    } catch (error) {
      console.error('Failed to copy content.', error);
      statusSignal.set('Failed');
      setTimeout(() => statusSignal.set(''), 2000);
    }
  }

  private parseCertificate(certificatePem: string): DecodedCert {
    const normalizedCert = certificatePem.trim();

    if (!normalizedCert) {
      throw new Error('Insira um certificado antes de tentar decodificar.');
    }

    if (!normalizedCert.includes('-----BEGIN CERTIFICATE-----')) {
      throw new Error('Formato de certificado inválido. Verifique se o bloco PEM completo.');
    }

    let certificateObject: forge.pki.Certificate;
    try {
      certificateObject = forge.pki.certificateFromPem(normalizedCert);
    } catch {
      throw new Error(
        'Falha ao interpretar o certificado. Confirme se o conteúdo foi copiado integralmente.',
      );
    }

    const subjectFields = this.mapAttributes(certificateObject.subject.attributes ?? []);
    const issuerFields = this.mapAttributes(certificateObject.issuer.attributes ?? []);
    const publicKeyPem = forge.pki.publicKeyToPem(certificateObject.publicKey);
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const { algorithm, strength } = this.getKeyDetails(publicKey);

    return {
      subjectCN: subjectFields['commonName'] || subjectFields['CN'],
      organization: subjectFields['organizationName'] || subjectFields['O'],
      organizationalUnit: subjectFields['organizationalUnitName'] || subjectFields['OU'],
      issuerCN: issuerFields['commonName'] || issuerFields['CN'],
      issuerOrganization: issuerFields['organizationName'] || issuerFields['O'],
      serialNumber: (certificateObject.serialNumber || '').toUpperCase() || 'Não informado',
      validFrom: this.formatDate(certificateObject.validity.notBefore),
      validTo: this.formatDate(certificateObject.validity.notAfter),
      sans: this.extractSans(certificateObject),
      publicKey: publicKeyPem,
      keyAlgorithm: algorithm,
      keyStrength: strength,
      signatureAlgorithm: this.getSignatureAlgorithm(certificateObject),
    };
  }

  private mapAttributes(attributes: ForgeAttribute[]): Record<string, string> {
    const fields: Record<string, string> = {};

    for (const attr of attributes) {
      const value = typeof attr.value === 'string' ? attr.value : undefined;
      if (!value) {
        continue;
      }

      if (attr.name) {
        fields[attr.name] = value;
      }

      if (attr.shortName) {
        fields[attr.shortName] = value;
      }
    }

    return fields;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'medium',
      timeStyle: 'medium',
      timeZone: 'UTC',
    }).format(date) + ' UTC';
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

  private extractSans(certificateObject: forge.pki.Certificate): string[] {
    const sanExtension = certificateObject.getExtension('subjectAltName') as ForgeSanExtension | null;

    if (!sanExtension || !Array.isArray(sanExtension.altNames) || !sanExtension.altNames.length) {
      return [];
    }

    return sanExtension.altNames
      .map((altName) => {
        if (altName.type === 2) {
          return altName.value ?? null;
        }

        if (altName.type === 7 && altName.ip) {
          return altName.ip;
        }

        return altName.value ?? null;
      })
      .filter((value): value is string => typeof value === 'string' && value.length > 0);
  }

  private getSignatureAlgorithm(certificateObject: forge.pki.Certificate): string {
    const oid = certificateObject.signatureOid || certificateObject.siginfo?.algorithmOid;

    if (!oid) {
      return 'Não identificado';
    }

    return forge.pki.oids[oid] || oid;
  }
}
