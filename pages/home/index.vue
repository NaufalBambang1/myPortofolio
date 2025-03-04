<template>
    <div class="grid grid-cols-1 xl:grid-cols-3 pt-5 gap-5">
        <!-- About -->
        <About/>

        <div class="grid grid-cols-1 gap-5">
            <Card class="rounded-xl">
                <CardHeader>
                    <span class="font-bold text-lg">Work Experience</span>
                </CardHeader>
                <CardContent >
                    <div class="flex flex-col gap-5">
                        <div class="flex gap-5">
                            <div class="w-[30%]">
                                <span class="text-gray-600">2024-2025</span>
                            </div>
                            <div class="w-[80%]">
                                <span class=" text-gray-700 font-bold">PT Trans Berjaya Khatulistiwa</span><br>
                                <span class="text-gray-700">Front End Developer Staff</span>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="w-[30%]">
                                <span class="text-gray-600">2024-2024</span>
                            </div>
                            <div class="w-[80%]">
                                <span class=" text-gray-700 font-bold">UPTD Klinik Hewan Bandung</span><br>
                                <span class="text-gray-700">Front End Developer Freelancer</span>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="w-[30%]">
                                <span class="text-gray-600">2023-2024</span>
                            </div>
                            <div class="w-[80%]">
                                <span class="text-gray-700 font-bold">PT Inovasi Sukses Sentosa (Indotrading)</span><br>
                                <span class="text-gray-700">Front End Developer Intern</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <!-- My Expert Area -->
            <Card class="rounded-xl">
                <CardHeader>
                    <span class="font-bold text-lg">My Expert Area</span>
                </CardHeader>
                <CardContent >
                    <div class="grid grid-cols-3 gap-5">
                        <div class="bg-slate-100 p-4 py-5 rounded-xl flex justify-center hover:bg-slate-600 transition">
                            <img src="/assets/images/nuxt.png" alt="Nuxt">
                        </div>
                        <div class="bg-slate-100 p-4 py-5 rounded-xl flex justify-center hover:bg-slate-600 transition">
                            <img src="/assets/images/laravel.png" alt="Laravel">
                        </div>
                        <div class="bg-slate-100 p-4 py-5 rounded-xl flex justify-center hover:bg-slate-600 transition">
                            <img src="/assets/images/next.png" alt="Next">
                        </div>
                        <div class="bg-slate-100 p-4 py-5 rounded-xl flex justify-center hover:bg-slate-600 transition">
                            <img src="/assets/images/tailwind.png" alt="Tailwind">
                        </div>
                        <div class="bg-slate-100 p-4 py-5 rounded-xl flex justify-center hover:bg-slate-600 transition">
                            <img src="/assets/images/css.png" alt="Css">
                        </div>
                        <div class="bg-slate-100 p-4 py-5 rounded-xl flex justify-center hover:bg-slate-600 transition">
                            <img src="/assets/images/javscript.png" alt="Javascript">
                        </div>
                        <div class="bg-slate-100 p-4 py-5 rounded-xl flex justify-center hover:bg-slate-600 transition">
                            <img src="/assets/images/typescript.png" alt="TypeScript">
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        <!-- Recent Project -->
        <Card class="rounded-xl">
            <CardHeader>
                <div class="flex justify-between">
                    <span class="font-bold text-lg">Recent Projects</span>
                    <a href="/works" class="flex text-slate-600 underline">All Projects</a>
                </div>
            </CardHeader>
            <CardContent class="grid grid-cols-1 gap-5">
                <div>
                    <div class="bg-slate-200 rounded-xl relative px-4 pt-4">
                        <img src="/assets/images/amarta.png" alt="Travel With Amarta">
                        <div class="absolute bottom-2 left-4 bg-slate-700 px-2 rounded-xl">
                            <span class="text-white text-sm leading-">Product Freelancer</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-slate-200 rounded-xl relative px-4 pt-4">
                        <img src="/assets/images/bean.png" alt="Travel With Amarta">
                        <div class="absolute bottom-2 left-4 bg-slate-700 px-2 rounded-xl">
                            <span class="text-white text-sm leading-">Independent Project</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-slate-200 rounded-xl relative px-4 pt-4">
                        <img src="/assets/images/idt_freelance.png" alt="Travel With Amarta">
                        <div class="absolute bottom-2 left-4 bg-slate-700 px-2 rounded-xl">
                            <span class="text-white text-sm leading-">Product Freelancer</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>

<script setup>
import { useHead } from 'unhead';

useHead({
  title: 'Home | My Portfolio',
});
</script>
