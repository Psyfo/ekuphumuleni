import { PageGuide as PageGuide_b6e37d3858464b90f3e461fca87d91f6 } from '@/payload/components/PageGuide'
import { RowLabel as RowLabel_330bd7521fe9b72cd9d2defbdaf80bf1 } from '@/payload/components/RowLabel'
import { Icon as Icon_91bbc66a9b3ed1dae52e0caef1a54af7 } from '@/payload/components/Logo'
import { Logo as Logo_91bbc66a9b3ed1dae52e0caef1a54af7 } from '@/payload/components/Logo'
import { Welcome as Welcome_44a5827b4d08a7af1e5ba1661671819a } from '@/payload/components/Welcome'
import { CollectionCards as CollectionCards_f9c02e79a4aed9a3924487c0cd4cafb1 } from '@payloadcms/next/rsc'
import { S3ClientUploadHandler as S3ClientUploadHandler_f97aa6c64367fa259c5bc0567239ef24 } from '@payloadcms/storage-s3/client'

/** @type import('payload').ImportMap */
export const importMap = {
  "@/payload/components/PageGuide#PageGuide": PageGuide_b6e37d3858464b90f3e461fca87d91f6,
  "@/payload/components/RowLabel#RowLabel": RowLabel_330bd7521fe9b72cd9d2defbdaf80bf1,
  "@/payload/components/Logo#Icon": Icon_91bbc66a9b3ed1dae52e0caef1a54af7,
  "@/payload/components/Logo#Logo": Logo_91bbc66a9b3ed1dae52e0caef1a54af7,
  "@/payload/components/Welcome#Welcome": Welcome_44a5827b4d08a7af1e5ba1661671819a,
  "@payloadcms/next/rsc#CollectionCards": CollectionCards_f9c02e79a4aed9a3924487c0cd4cafb1,
  "@payloadcms/storage-s3/client#S3ClientUploadHandler": S3ClientUploadHandler_f97aa6c64367fa259c5bc0567239ef24
}
