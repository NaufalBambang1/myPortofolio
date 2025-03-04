<template>
    <div class="gradient-background min-h-screen">
        <div class="container mx-auto pt-9">
            <div class="sticky top-0 z-50">
                <Card class="py-4 px-6 rounded-xl ">
                    <CardContent class="p-0">
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-xl font-bold">My Portofolio</span>
                            </div>
                            <div class="hidden xl:block">
                                <ul class="flex gap-2 items-center">
                                    <li v-for="item in navItems" :key="item.path">
                                       <NuxtLink :to="item.path" class="flex gap-2 p-2 px-4 rounded-lg hover:bg-slate-700 transition hover:text-white"
                                       :class="{ 'bg-slate-700 text-white ': route.path === item.path }">
                                            <component :is="item.icon" />
                                            {{ item.label }}
                                       </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="block xl:hidden">
                                <Sheet>
                                    <SheetTrigger as-child>
                                        <Button variant="outline">
                                            <SquareMenu />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent class="pt-12">
                                        <ul class="flex flex-col gap-2">
                                            <li v-for="item in navItems" :key="item.path">
                                            <NuxtLink :to="item.path" class="flex gap-2 p-2 px-4 rounded-lg hover:bg-slate-700 transition hover:text-white"
                                            :class="{ 'bg-slate-700 text-white ': route.path === item.path }">
                                                    <component :is="item.icon" />
                                                    {{ item.label }}
                                            </NuxtLink>
                                            </li>
                                        </ul>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div class="pb-5">
                <slot />
            </div>
        </div>
    </div>
</template>
<script setup>
import { House,CircleUser ,BriefcaseBusiness ,PhoneCall, SquareMenu    } from 'lucide-vue-next';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useRoute } from 'vue-router'
const route = useRoute()

const navItems = ref([
  { label: 'Home', path: '/home', icon: House },
  { label: 'About', path: '/about', icon: CircleUser },
  { label: 'Works', path: '/works', icon: BriefcaseBusiness },
//   { label: 'Contact', path: '/contact', icon: PhoneCall },
]);

</script>

<style>
.gradient-background {
    background: linear-gradient(to right, white, #e0e0ff, #d0d0ff, white);
    height: 100%;
}
</style>