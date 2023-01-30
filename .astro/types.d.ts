declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"2019-annual-review.md": {
  id: "2019-annual-review.md",
  slug: "2019-annual-review",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2020-annual-retrospective.md": {
  id: "2020-annual-retrospective.md",
  slug: "2020-annual-retrospective",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-annual-retrospective.md": {
  id: "2021-annual-retrospective.md",
  slug: "2021-annual-retrospective",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-annual-retrospective.md": {
  id: "2022-annual-retrospective.md",
  slug: "2022-annual-retrospective",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"blue-light-blues.md": {
  id: "blue-light-blues.md",
  slug: "blue-light-blues",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"composition-in-react.md": {
  id: "composition-in-react.md",
  slug: "composition-in-react",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"docker-pruning-unused-resources.md": {
  id: "docker-pruning-unused-resources.md",
  slug: "docker-pruning-unused-resources",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"hello-world.md": {
  id: "hello-world.md",
  slug: "hello-world",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"nextjs-pre-rendering.md": {
  id: "nextjs-pre-rendering.md",
  slug: "nextjs-pre-rendering",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"practice-over-product.md": {
  id: "practice-over-product.md",
  slug: "practice-over-product",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"react-server-components.md": {
  id: "react-server-components.md",
  slug: "react-server-components",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"software-tools-that-keep-me-productive.md": {
  id: "software-tools-that-keep-me-productive.md",
  slug: "software-tools-that-keep-me-productive",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"startup-life-as-a-junior-software-developer.md": {
  id: "startup-life-as-a-junior-software-developer.md",
  slug: "startup-life-as-a-junior-software-developer",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"static-properties-and-methods.md": {
  id: "static-properties-and-methods.md",
  slug: "static-properties-and-methods",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"synthetic-events.md": {
  id: "synthetic-events.md",
  slug: "synthetic-events",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"talk-summary-defining-the-web3-stack.md": {
  id: "talk-summary-defining-the-web3-stack.md",
  slug: "talk-summary-defining-the-web3-stack",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"talking-out-loud.md": {
  id: "talking-out-loud.md",
  slug: "talking-out-loud",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"template.md": {
  id: "template.md",
  slug: "new-title",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-four-step-framework-for-effective-learning.md": {
  id: "the-four-step-framework-for-effective-learning.md",
  slug: "the-four-step-framework-for-effective-learning",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-magic-of-closures.md": {
  id: "the-magic-of-closures.md",
  slug: "the-magic-of-closures",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-meaning-of-fatherhood.md": {
  id: "the-meaning-of-fatherhood.md",
  slug: "the-meaning-of-fatherhood",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-stoic-path.md": {
  id: "the-stoic-path.md",
  slug: "the-stoic-path",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"books": {
"four-thousand-weeks.md": {
  id: "four-thousand-weeks.md",
  slug: "four-thousand-weeks",
  body: string,
  collection: "books",
  data: any
},
"template.md": {
  id: "template.md",
  slug: "book-review-template",
  body: string,
  collection: "books",
  data: any
},
"the-powder-mage-trilogy.md": {
  id: "the-powder-mage-trilogy.md",
  slug: "the-powder-mage-trilogy",
  body: string,
  collection: "books",
  data: any
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
