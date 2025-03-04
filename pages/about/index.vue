<template>
   <div class="grid grid-cols-1 xl:grid-cols-3 pt-5 gap-5">
        <div class="max-h-auto xl:sticky xl:top-5 self-start">
            <about/>
        </div>

        <Card class="col-span-1 xl:col-span-2 rounded-xl p-7">
            <CardContent class="pt-6">

                <div class="pb-5">
                    <h1 class="text-xl md:text-3xl font-bold mb-0">Hi, This is <b class="text-blue-600">Naufal Bambang Nugraha</b></h1>
                </div>
                <div class="pb-5">
                    <p class="mb-0 text-lg text-gray-600">
                        I am a <b>Computer Science</b> graduate with <b>2 years</b> of experience. Currently, I focus on Front End development using <b>Nuxt.js</b>, <b>Next.js,</b> and <b>Laravel</b>. 
                        I have a <b>strong willingness</b> to learn and work hard to continuously improve my skills and knowledge.
                    </p>
                </div>

                <!-- Education -->
                <div class="pb-5">
                    <span class="font-bold text-2xl  ">My Education</span>
                    <div class="grid grid-cols-1 xl:grid-cols-3 mt-5 gap-5">
                        <Card class="hover:bg-slate-600 hover:text-white transition">
                            <CardContent class="pt-6">
                                <span>2017 - 2020</span><br>
                                <span class="font-bold">SMAN 3 CIMAHI</span><br>
                                <span>Major IPA</span><br>
                            </CardContent>
                        </Card>
                        <Card class="hover:bg-slate-600 hover:text-white transition">
                            <CardContent class="pt-6">
                                <span>2020 - 2024</span><br>
                                <span class="font-bold">Binus University Bandung</span><br>
                                <span>Bachelor of Computer Science</span><br>
                                <span class="font-semibold">(GPA: 3.64/4.0)</span>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <!-- Work Experience -->
                <div class="pb-5">
                    <span class="font-bold text-2xl  ">My Work Experience</span>
                    <div class="grid grid-cols-1 xl:grid-cols-2 mt-5 gap-5">
                        <Card class="hover:bg-slate-600 hover:text-white transition">
                            <CardContent class="pt-6">
                                <span >Feb 2023 - Feb 2024</span><br>
                                <span class="font-bold">PT Inovasi Sukses Sentosa (Indotrading)</span><br>
                                <span>Front End Developer Intern</span><br>
                            </CardContent>
                        </Card>
                        <Card class="hover:bg-slate-600 hover:text-white transition">
                            <CardContent class="pt-6">
                                <span>Apr 2024 - Aug 2024</span><br>
                                <span class="font-bold">UPTD Klinik Hewan Bandung</span><br>
                                <span>Front End Developer Freelancer</span><br>
                            </CardContent>
                        </Card>
                        <Card class="hover:bg-slate-600 hover:text-white transition">
                            <CardContent class="pt-6">
                                <span>Sept 2024 - Oct 2024</span><br>
                                <span class="font-bold">PT Inovasi Sukses Sentosa (Indotrading)</span><br>
                                <span>Front End Developer Freelancer</span><br>
                            </CardContent>
                        </Card>
                        <Card class="hover:bg-slate-600 hover:text-white transition">
                            <CardContent class="pt-6">
                                <span>Nov 2024 - Present</span><br>
                                <span class="font-bold">PT Trans Berjaya Khatulistiwa</span><br>
                                <span>Front End Developer Staff</span><br>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <!-- My Skills -->
                <div class="pb-5">
                    <span class="font-bold text-2xl  ">My Skills</span>
                    <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
                        <Card class="flex items-center justify-center p-2 hover:bg-slate-600 hover:text-white transition"
                            v-for="skill in skills"
                            :key="skill">
                            <CardContent class="pt-6">
                                {{ skill }}
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <!-- My Certificate -->
                <div>
                    <span class="font-bold text-2xl  ">My Certificate</span>
                    <div class="grid grid-cols-1 xl:grid-cols-3 mt-5 gap-5">
                        <a href="https://drive.google.com/file/d/1qxBsFQTzZ3JtpBYs-e8JHocepg1rgWEn/view?usp=sharing" target="_blank" class="">
                            <Card class="flex items-center justify-center p-2 hover:bg-slate-600 hover:text-white cursor-pointer transition">
                                Certificate of Internship
                            </Card>
                        </a>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>

<script setup>
    const skills = ref([
        'HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript',
        'Responsive Web Design', 'Vue.JS', 'Quasar Framework', 'Laravel', 'Next.JS',
        'React.JS', 'Nuxt JS', 'Insomnia', 'RESTful API'
    ]);
</script>