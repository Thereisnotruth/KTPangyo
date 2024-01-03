'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '@/components/atoms/button'
import Flex from '@/components/atoms/flex'
import Grid from '@/components/atoms/grid'
import GridItem from '@/components/atoms/grid-item'

export default function Home() {
  const floors = [
    {
      label: '외부',
    },
    {
      label: 'F10',
    },
    {
      label: 'F8',
    },
    {
      label: 'F2',
    },
    {
      label: 'F1',
    },
    {
      label: 'B1',
    },

  ]
  return (
    <main>
      <Grid>
        <GridItem span={9}>
          <div style={{ width: '100%', height: '100%', backgroundColor: '#888888' }}>여기에 3D 모델</div>
        </GridItem>
        <GridItem span={3}>
          <Flex
            $gap={4}
            $direction="column"
            $align="center"
          >
            {/* 네비게이터 */}
            <Flex
              $direction="column"
              $align="center"
              $height="60%"
            >
              {
                floors.map(floor => (
                  <Button
                    $color="secondary"
                    $size="xl"
                    $wide={true}
                    $m={1}
                    $p={1}
                    key={floor.label}
                  >
                    {floor.label}
                  </Button>
                ),
                )
              }

            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </main>
  )
}
