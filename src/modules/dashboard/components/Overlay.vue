<script lang="ts" setup>
import Markdown from 'vue3-markdown-it';
import { defineProps } from 'vue';

const props = defineProps<{ content: string }>()

</script>  

<template>
    <div class="overlay">
        <n-space justify="center" align="center" class="content-wrapper">
            <Markdown class="markdown" :source="props.content" :breaks="true" />
        </n-space>
    </div>
</template>

<style lang="less" scoped>
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #101014;
    color: hsla(0, 0%, 100%, 0.8);
    text-align: center;
    .content-wrapper {
        height: 100%;
    }

    ::v-deep(.markdown) {
        padding: 50px 100px;
        background-color: #1f1f24;

        h1 {
            margin: 0;
            font-size: 50px;
            border-bottom: 2px solid #ffffff22;

            & + p {
                margin-top: 20px;
            }
        }
        p {
            font-size: 25px;
        }
    }
}
</style>