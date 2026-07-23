import { useMemo, useRef, useState } from 'react';
import InvoiceHeader from '../components/invoice/InvoiceHeader';
import ClientDetails from '../components/invoice/ClientDetails';
import InvoiceTable from '../components/invoice/InvoiceTable';
import PaymentSummary from '../components/invoice/PaymentSummary';
import Notes from '../components/invoice/Notes';
import Signature from '../components/invoice/Signature';
import ExportButton from '../components/invoice/ExportButton';
import type { ClientInfo, InvoiceMeta, ServiceItem, SummaryItem } from '../components/invoice/types';

const INVOICE_SEQUENCE_KEY = 'agni-web-solutions-invoice-sequence';
const INVOICE_SESSION_KEY = 'agni-web-solutions-current-invoice';

const serviceItems: ServiceItem[] = [
  {
    description: 'Website Development',
    qty: 1,
    amount: 7000,
  },
  {
    description: 'Domain Name Purchase (.in)',
    qty: 1,
    amount: 1081,
  },
];

const paymentSummaryItems: SummaryItem[] = [
  {
    label: 'Website Development Total',
    value: 7000,
  },
  {
    label: 'Advance Received',
    value: 2000,
  },
  {
    label: 'Domain Purchased by Agni Web Solutions',
    value: 1081,
  },
];

const invoiceNotes = [
  'Thank you for choosing Agni Web Solutions.',
  'Please complete the pending balance payment at the earliest.',
  'Domain ownership and website source files will be handed over after full payment.',
];

const client: ClientInfo = {
  name: 'G. Arun',
  company: 'CAPILLA DENTAL COSMETIC CENTRE',
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatInvoiceDate() {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

function getOrCreateInvoiceNumber() {
  if (typeof window === 'undefined') {
    return 'AWS-INV-0001';
  }

  const sessionInvoice = window.sessionStorage.getItem(INVOICE_SESSION_KEY);

  if (sessionInvoice) {
    return sessionInvoice;
  }

  const lastIssued = Number.parseInt(window.localStorage.getItem(INVOICE_SEQUENCE_KEY) ?? '0', 10);
  const nextIssued = Number.isNaN(lastIssued) ? 1 : lastIssued + 1;
  const invoiceNumber = `AWS-INV-${String(nextIssued).padStart(4, '0')}`;

  window.localStorage.setItem(INVOICE_SEQUENCE_KEY, String(nextIssued));
  window.sessionStorage.setItem(INVOICE_SESSION_KEY, invoiceNumber);

  return invoiceNumber;
}

export default function InvoiceGenerator() {
  const [invoiceNumber] = useState(getOrCreateInvoiceNumber);
  const invoiceDate = useMemo(() => formatInvoiceDate(), []);
  const invoiceRef = useRef<HTMLDivElement | null>(null);

  const balanceAmount = 6081;

  const meta: InvoiceMeta = {
    invoiceNumber,
    invoiceDate,
    status: 'Pending Payment',
    preparedBy: 'Vignesh',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-primary-white py-8 md:py-12 print:bg-primary-white print:py-0">
      <div className="container-premium">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between print:hidden">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
              Agni Web Solutions
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Invoice Generator
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Production-ready A4 invoice preview with premium layout and crisp PDF export for
              client delivery.
            </p>
          </div>

          <ExportButton
            targetRef={invoiceRef}
            fileName="Invoice_G_Arun_Capilla_Dental_Cosmetic_Centre.pdf"
          />
        </div>

        <div className="overflow-x-auto rounded-[32px] border border-slate-200/70 bg-white/40 p-3 shadow-soft backdrop-blur-sm print:overflow-visible print:rounded-none print:border-0 print:bg-transparent print:p-0 print:shadow-none">
          <div
            ref={invoiceRef}
            className="mx-auto flex min-h-[297mm] w-[210mm] flex-col bg-primary-white p-[16mm] text-slate-900 shadow-[0_40px_90px_rgba(15,23,42,0.08)] print:min-h-0 print:w-full print:p-0 print:shadow-none"
          >
            <div className="space-y-8">
              <InvoiceHeader meta={meta} />
              <ClientDetails client={client} />
              <InvoiceTable items={serviceItems} formatCurrency={formatCurrency} />
              <PaymentSummary
                items={paymentSummaryItems}
                balanceAmount={balanceAmount}
                formatCurrency={formatCurrency}
              />
              <Notes notes={invoiceNotes} />
              <Signature preparedBy={meta.preparedBy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
