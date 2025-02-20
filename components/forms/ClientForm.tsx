'use client';

import 'react-phone-number-input/style.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { db } from '@/lib/firebaseConfig';

import { ClientFormSchema } from '../../lib/validation';

const ClientForm = () => {
  const form = useForm<z.infer<typeof ClientFormSchema>>({
    resolver: zodResolver(ClientFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      insuranceType: '',
      budget: '',
    },
  });

  const { reset } = form;

  const onSubmit = async (data: z.infer<typeof ClientFormSchema>) => {
    console.log('Data: ', data);
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
              <FormLabel className="lg:text-xl">Phone Number</FormLabel>{' '}
              <FormControl className="lg:text-xl w-[180px]">
                <PhoneInput
                  {...field}
                  defaultCountry="US"
                  international
                  withCountryCallingCode
                  placeholder="Enter phone number"
                  className="mt-2 h-9 rounded-md px-3 text-sm border bg-dark-400  placeholder:text-dark-600 border-dark-400 !important;"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="insuranceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-xl">Insurance Type</FormLabel>
              <FormControl className="lg:text-xl">
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="life">Life</SelectItem>
                  </SelectContent>
                </Select>
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
