import { QueryClient } from "@tanstack/react-query";

// export const queryClient = new QueryClient({
//   mutationCache: new MutationCache({
//     onSettled: () => {
//       queryClient.invalidateQueries();
//     },
//   }),
// });

export const queryClient = new QueryClient()
