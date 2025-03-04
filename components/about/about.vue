<template>
    <Card class="rounded-xl">
            <CardContent class="pt-6 grid grid-cols-1 gap-4">
                <div class="flex justify-center">
                    <img src="/assets/images/a1.jpg" alt="myPhoto" class="rounded-xl object-cover">
                </div>
                <div>
                    <span class="font-bold text-lg">Naufal Bambang Nugraha</span>
                </div>
                <div>
                    <p class="mb-0 text-sm text-gray-600">
                        I am a <b>Computer Science</b> graduate with <b>2 years</b> of experience. Currently, I focus on Front End development using <b>Nuxt.js</b>, <b>Next.js,</b> and <b>Laravel</b>. 
                        I have a <b>strong willingness</b> to learn and work hard to continuously improve my skills and knowledge.
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <div class="bg-blue-600 py-3 px-4   rounded-xl text-white">
                        <a href="https://wa.link/yj6bd1" class="flex gap-3" target="_blank">
                            <Smartphone/>
                            Whatsapp Me
                        </a>
                    </div>
                    <div class=" border rounded-xl py-3 px-4 flex gap-3 cursor-pointer hover:bg-slate-600 hover:text-white transition" @click="copyToClipboard ">
                        <Copy/>
                        Copy Email
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="border bg-slate-600 p-2 rounded-xl">
                        <a href="https://www.instagram.com/naufal_bambang/" class="text-white" target="_blank">
                            <Instagram />
                        </a>
                    </div>
                    <div class="border bg-slate-600 p-2 rounded-xl">
                        <a href="https://www.linkedin.com/in/naufal-bambang-6b5535253/" class="text-white" target="_blank">
                            <Linkedin  />
                        </a>
                    </div>
                    <div class="border bg-slate-600 p-2 rounded-xl">
                        <a href="https://github.com/NaufalBambang1" class="text-white" target="_blank">
                            <Github  />
                        </a>
                    </div>
                </div>
            </CardContent>
        </Card>
</template>

<script setup>
import { Smartphone,Copy ,Instagram , Linkedin,Github ,ArrowRight    } from 'lucide-vue-next';
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

const email = ref('naufal.nugraha19@gmail.com')

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(email.value)
    toast({
        title:'Email copied successfully!'
    })
  } catch (err) {
    console.error('Gagal menyalin email:', err)
  }
}

</script>