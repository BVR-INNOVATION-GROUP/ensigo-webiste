import Button from '@/components/base/Button'
import Container from '@/components/base/Container'
import React from 'react'

const ReportDownload = () => {
    return (
        <div className='bg-dark py-[6rem]'>
            <Container className=''>
                <div className='border-b pb-10 border-gray-50/10 flex flex-col items-center justify-center'>
                    <h1 className="text-2xl font-bold">2024 Impact Report</h1>
                    <p className='mt-3 mb-6 max-w-[50%] text-center opacity-60'>Download our comprehensive annual report with detailed metrics, case studies, and third-party verification</p>
                    <Button title='Download Full Report (PDF)' className='border rounded-full border-gray-50/30' />
                </div>

            </Container>
        </div>
    )
}

export default ReportDownload