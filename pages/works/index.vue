<template>
    <div class="grid grid-cols-1 xl:grid-cols-3 pt-5 gap-5">
        <div class="max-h-auto xl:sticky xl:top-5 self-start">
            <about/>
        </div>

        <Card class="col-span-1 xl:col-span-2 rounded-xl">
            <CardContent class="pt-6">
                <div class="pb-5">
                    <h1 class="text-xl md:text-3xl font-bold mb-0">Check Out My Latest <b class="text-blue-600">Projects</b></h1>
                </div>
                <div class="grid grid-cols-1 gap-7">
                    <div>
                        <div class="bg-slate-200 rounded-xl relative px-5 pt-5 ">
                            <img src="/assets/images/valorant.png" alt="Bean Society">
                            <div class="absolute bottom-2 left-5 bg-slate-700 px-2 rounded-xl ">
                                <span class="text-white text-sm leading-">Independent Project</span>
                            </div>
                        </div>
                        <div class="pt-2 px-2">
                            <div class="flex justify-between">
                                <h1 class="text-normal md:text-xl font-semibold">Valorant Collections</h1>
                                <a href="https://valorantcollections.netlify.app/" target="_blank" class="text-slate-700 content-center underline">View Page</a>
                            </div>
                            <span class="text-sm md:text-normal">Independent Project</span><br>
                            <span class="text-sm md:text-normal">Technology: VueJs, vuex, TailwindCSS</span>
                        </div>
                    </div>
                    <div class="border-b-2"></div>
                    <div>
                        <div class="bg-slate-200 rounded-xl relative px-5 pt-5 ">
                            <img src="/assets/images/bean.png" alt="Bean Society">
                            <div class="absolute bottom-2 left-5 bg-slate-700 px-2 rounded-xl ">
                                <span class="text-white text-sm leading-">Independent Project</span>
                            </div>
                        </div>
                        <div class="pt-2 px-2">
                            <div class="flex justify-between">
                                <h1 class="text-normal md:text-xl font-semibold">Bean Society</h1>
                                <a href="https://beansociety.netlify.app/" target="_blank" class="text-slate-700 content-center underline">View Page</a>
                            </div>
                            <span class="text-sm md:text-normal">Independent Project</span><br>
                            <span class="text-sm md:text-normal">Technology: NextJs, TailwindCSS</span>
                        </div>
                    </div>
                    <div class="border-b-2"></div>
                    <div>
                        <div class="bg-slate-200 rounded-xl relative px-5 pt-5 ">
                            <img src="/assets/images/idt_freelance.png" alt="Bean Society">
                            <div class="absolute bottom-2 left-5 bg-slate-700 px-2 rounded-xl ">
                                <span class="text-white text-sm leading-">Project Freelance</span>
                            </div>
                        </div>
                        <div class="pt-2 px-2">
                            <div class="flex justify-between">
                                <h1 class="text-normal md:text-xl font-semibold">Buy Leads - Indotrading</h1>
                            </div>
                            <span class="text-sm md:text-normal">Project Freelance</span><br>
                            <span class="text-sm md:text-normal">Technology: VueJs, Boostrap</span>
                        </div>
                    </div>
                    <div class="border-b-2"></div>
                    <div>
                        <div class="bg-slate-200 rounded-xl relative px-5 pt-5 ">
                            <img src="/assets/images/movieflix.png" alt="Bean Society">
                            <div class="absolute bottom-2 left-5 bg-slate-700 px-2 rounded-xl ">
                                <span class="text-white text-sm leading-">Independent Project</span>
                            </div>
                        </div>
                        <div class="pt-2 px-2">
                            <div class="flex justify-between">
                                <h1 class="text-normal md:text-xl font-semibold">Movieflix</h1>
                                <a href="https://naufal-moviesflix.netlify.app/" target="_blank" class="text-slate-700 content-center underline">View Page</a>
                            </div>
                            <span class="text-sm md:text-normal">Independent Project</span><br>
                            <span class="text-sm md:text-normal">Technology: VueJs, Boostrap</span>
                        </div>
                    </div>
                    <div class="border-b-2"></div>
                    <div>
                        <div class="bg-slate-200 rounded-xl relative px-5 pt-5 ">
                            <img src="/assets/images/amarta.png" alt="Travel With Amarta">
                            <div class="absolute bottom-2 left-5 bg-slate-700 px-2 rounded-xl ">
                                <span class="text-white text-sm leading-">Product Freelancer</span>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="flex justify-between">
                                <h1 class="text-normal md:text-xl font-semibold">Travel With Amarta</h1>
                                <a href="https://travelwithamarta.com/" target="_blank" class="text-slate-700 content-center underline">View Page</a>
                            </div>
                            <span class="text-sm md:text-normal">Project Freelancer</span><br>
                            <span class="text-sm md:text-normal">Technology: VueJs, Boostrap</span>
                        </div>
                    </div>
                    <div class="border-b-2"></div>
                    <div>
                        <div class="bg-slate-200 rounded-xl relative px-5 pt-5 ">
                            <img src="/assets/images/seo.png" alt="SEO PAGESPEED" class="place-self-center">
                            <div class="absolute bottom-2 left-5 bg-slate-700 px-2 rounded-xl ">
                                <span class="text-white text-sm leading-">Task Internship</span>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="flex justify-between">
                                <h1 class="text-normal md:text-xl font-semibold">SEO PAGESPEED </h1>
                            </div>
                            <span class="text-sm md:text-normal">Task Internship</span>
                        </div>
                    </div>
                    <div class="border-b-2"></div>
                    <div>
                        <div class="bg-slate-200 rounded-xl relative px-5 pt-5 ">
                            <img src="/assets/images/hotel.png" alt="Detail Room Hotel" class="place-self-center">
                            <div class="absolute bottom-2 left-5 bg-slate-700 px-2 rounded-xl ">
                                <span class="text-white text-sm leading-">Task Internship</span>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="flex justify-between">
                                <h1 class="text-normal md:text-xl font-semibold">Detail Room Hotel - Indotraing</h1>
                            </div>
                            <span class="text-sm md:text-normal">Task Internship</span><br>
                            <span class="text-sm md:text-normal">Technology: VueJs, Boostrap</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>