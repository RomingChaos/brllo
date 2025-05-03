'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    company: '',
    role: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to send');

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setForm({
          name: '',
          email: '',
          country: '',
          company: '',
          role: '',
          message: '',
        });
        onClose();
      }, 2000);
    } catch (err) {
      alert('Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      ref={modalRef}
      onClick={handleOverlayClick}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="relative w-full max-w-lg max-h-[80vh] p-4" onClick={e => e.stopPropagation()}>
        <Card className="rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8 overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-semibold">
              Let’s build your flooring business online
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Whether you're a flooring retailer or contractor, we’ll help you launch a stunning,
              lead-generating website fast. Fill out the form and we’ll get back to you shortly.
            </p>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={form.name} onChange={e => handleChange('name', e.target.value)} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="country">Country/Region</Label>
                <Select defaultValue={form.country} onValueChange={val => handleChange('country', val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country/Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" value={form.company} onChange={e => handleChange('company', e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Your Role</Label>
                <Select defaultValue={form.role} onValueChange={val => handleChange('role', val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retailer">Flooring Retailer</SelectItem>
                    <SelectItem value="contractor">Flooring Contractor</SelectItem>
                    <SelectItem value="designer">Interior Designer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading || success}>
                {loading ? 'Submitting...' : success ? 'Submitted!' : 'Submit'}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};
