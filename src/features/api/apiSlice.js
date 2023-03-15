import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://api.test/api',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json'
        },
    }),
    endpoints: (builder) => ({
        getPollingUnits: builder.query({
            query: () => '/pollingunits',
        }),
        getPollingUnitResult: builder.query({
            query: (id) => `/pollingunit/${id}`
        }),
        getWards: builder.query({
            query: () => '/wards'
        }),
        getWardResult: builder.query({
            query: (id) => `/wardresult/${id}`
        }),
        getLgasQuery: builder.query({
            query: () => `/lgas`
        }),
        getLgaResult: builder.query({
            query: (id) => `/lgaresult/${id}`
        }),
        submitResult: builder.mutation({
            query: results => ({
                url: '/upload',
                method: 'POST',
                body: {...results}
            })
        })
    })
})


export const {
    useGetPollingUnitsQuery,
    useGetPollingUnitResultQuery,
    useGetWardsQuery,
    useLazyGetWardResultQuery,
    useGetLgasQueryQuery,
    useLazyGetLgaResultQuery,
    useSubmitResultMutation
} = apiSlice