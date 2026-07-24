import test from 'node:test';
import assert from 'node:assert/strict';
import { getTreatmentOptions, validateAppointmentForm, buildAppointmentWhatsAppLink } from './appointmentForm.js';

test('returns department-specific treatments', () => {
  assert.deepEqual(getTreatmentOptions('Skin').slice(0, 3), [
    'Hydra Facial',
    'Chemical Peel',
    'Acne Treatment',
  ]);

  assert.deepEqual(getTreatmentOptions('Dental').slice(0, 3), [
    'Dental Implants',
    'Root Canal Treatment',
    'Smile Design',
  ]);
});

test('validates required booking fields', () => {
  const errors = validateAppointmentForm({
    name: 'A',
    phone: '123',
    branch: '',
    department: '',
    treatment: '',
    date: '',
    time: '',
    message: '',
  }, '2026-07-24');

  assert.match(errors.name, /name/i);
  assert.match(errors.phone, /phone/i);
  assert.match(errors.branch, /branch/i);
  assert.match(errors.department, /department/i);
  assert.match(errors.treatment, /treatment/i);
  assert.match(errors.date, /date/i);
  assert.match(errors.time, /time/i);
});

test('builds a WhatsApp link using the correct branch number', () => {
  const link = buildAppointmentWhatsAppLink({
    name: 'Asha',
    phone: '9999999999',
    branch: 'Chennai',
    department: 'Skin',
    treatment: 'Hydra Facial',
    date: '2026-08-01',
    time: '16:00',
    message: 'Hello',
  });

  assert.match(link, /wa\.me\/919894299017/i);
  assert.match(link, /Hydra%20Facial/i);
});
