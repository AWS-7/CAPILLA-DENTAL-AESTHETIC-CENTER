import type { ClientInfo } from './types';

type ClientDetailsProps = {
  client: ClientInfo;
};

export default function ClientDetails({ client }: ClientDetailsProps) {
  return (
    <section className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50/70 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Billed By
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-slate-950">Agni Web Solutions</h2>
        <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600 md:text-base">
          <p>Prepared and issued by Vignesh</p>
          <p>Web design, development, and digital delivery services</p>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-primary-white p-6 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Billed To
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-slate-950">{client.name}</h2>
        <p className="mt-2 text-base leading-7 text-slate-600">{client.company}</p>
      </div>
    </section>
  );
}
