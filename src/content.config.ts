/**
 * Content Collections 설정 (Astro 6)
 * ── publications / awards / projects 마크다운 콘텐츠 로더 및 스키마 정의 ──
 */
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/** Publications — 출판된 논문 */
const publications = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
	schema: z.object({
		title: z.string(),
		authors: z.string(),
		journal: z.string(),
		year: z.number(),
		doi: z.string().optional(),
		link: z.string().url().optional(),
		order: z.number().default(0),
	}),
});

/** Awards — 수상 이력 및 학회 발표 */
const awards = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/awards' }),
	schema: z.object({
		title: z.string(),
		event: z.string(),
		date: z.string(),
		presentationType: z.string(),
		order: z.number().default(0),
	}),
});

/** Projects — AI 및 Computer Engineering 프로젝트 */
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		thumbnail: z.string(),
		order: z.number().default(0),
	}),
});

export const collections = { publications, awards, projects };
