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
    .content-wrapper {
        height: 100%;
    }

    ::v-deep(.markdown) {
        padding: 50px 100px;
        background-color: #1f1f24;
        border-radius: 10px;
        color: hsla(0, 0%, 100%, 0.8);
        text-align: center;
        font-size: 50px;

        h1 {
            margin: 0;
            font-size: 80px;
            border-bottom: 2px solid #ffffff22;

            & + p {
                margin-top: 20px;
            }
        }
        p:last-child {
            margin-bottom: 0;
        }
    }
}
</style>