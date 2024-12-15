'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { db } from '@/lib/firebaseConfig';

import { ClientFormSchema } from '../../lib/validation';

const ClientForm = () => {
  const form = useForm<z.infer<typeof ClientFormSchema>>({
    resolver: zodResolver(ClientFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      budget: '',
    },
  });

  const { reset } = form;

  const onSubmit = async (data: z.infer<typeof ClientFormSchema>) => {
    try {
      await addDoc(collection(db, 'quotes'), data);
      alert('Quote request sent successfully!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <Form {...form}>
      <form
        id="contact"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 lg:space-y-0 lg:space-x-8 lg:max-w-[1100px] lg:mx-auto px-10 py-10 mx-8 rounded-xl relative -top-10 z-50 bg-white md:flex items-center justify-between"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-xl">Name</FormLabel>
              <FormControl className="lg:text-xl">
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-xl">Email</FormLabel>
              <FormControl className="lg:text-xl">
                <Input placeholder="Email for information" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-xl">Phone Number</FormLabel>
              <FormControl className="lg:text-xl">
                <Input placeholder="Number to communicate" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-xl">Budget</FormLabel>
              <FormControl className="lg:text-xl">
                <Input placeholder="Estimated budget" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="lg:h-16 lg:w-44 rounded-xl lg:text-2xl text-white"
        >
          Get Quote
        </Button>
      </form>
    </Form>
  );
};

export default ClientForm;
