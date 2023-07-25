type Feed = {
  id: string;
  title: string;
  updatedAt: string;
  authors: Record<string, string[]>;
  generatedUrl?: string;
  entry: EntryData;
};

type EntryData = {
  id: string;
  title: string;
  updatedAt: string;
  link?: string;
  summary: string;
  published: string;
};

type MailingListType = typeof BITCOINDEV | typeof LIGHTNINGDEV;

export const BITCOINDEV = "bitcoin-dev";
export const LIGHTNINGDEV = "lightning-dev";

type SearchIndexData = {
  title: string;
  authors: string[];
  summary: string;
  path: string;
};

type SearchDataParams = {
  path?: string;
  query: {
    keyword?: string;
    author?: string;
  };
};

type HomepageEntryData = {
  id: string;
  title: string;
  link: string;
  authors: string[];
  published_at: string;
  summary: string;
  n_threads: number;
  dev_name: string;
  contributors: string[];
};

type HomepageData = {
  header_summary: string;
  enteries: HomepageEntryData[];
};

export type {
  Feed,
  EntryData,
  MailingListType,
  SearchIndexData,
  SearchDataParams,
  HomepageData
};
