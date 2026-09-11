"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobAction } from "@/utils/actions";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { JOB_MODES, JOB_STATUSES } from "@/utils/types";

const formSchema = z.object({
  position: z.string().min(2, {
    message: "Position is required.",
  }),
  company: z.string().min(2, {
    message: "Company is required.",
  }),
  location: z.string().min(2, {
    message: "Location is required.",
  }),
  status: z.enum(JOB_STATUSES),
  mode: z.enum(JOB_MODES),
});

export type CreateJobInput = z.infer<typeof formSchema>;

function CreateJobForm() {
  const form = useForm<CreateJobInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JOB_STATUSES[0],
      mode: JOB_MODES[0],
    },
  });

  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateJobInput) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast.add({
          type: "error",
          description: "There was an error.",
        });
        return;
      }
      toast.add({ type: "success", description: "Job created successfully." });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });

      router.push("/jobs");
      // form.reset();
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted mb-8 rounded p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {JOB_STATUSES.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mode</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    {JOB_MODES.map((mode) => (
                      <SelectItem key={mode} value={mode}>
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="sm:col-span-2 lg:col-start-3 self-end">
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "loading..." : "create job"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default CreateJobForm;
