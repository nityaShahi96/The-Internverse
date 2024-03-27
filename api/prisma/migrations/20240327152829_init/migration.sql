-- AlterTable
ALTER TABLE `student` ADD COLUMN `aboutYourself` VARCHAR(191) NULL,
    ADD COLUMN `addressId` INTEGER NULL,
    ADD COLUMN `designation` VARCHAR(191) NULL,
    ADD COLUMN `educationId` INTEGER NULL,
    ADD COLUMN `experienceId` INTEGER NULL,
    ADD COLUMN `skills` VARCHAR(191) NULL,
    ADD COLUMN `trainingId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NULL,
    `province` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `zipCode` VARCHAR(191) NULL,
    `permanentAddress` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `universityName` VARCHAR(191) NULL,
    `degree` VARCHAR(191) NULL,
    `universityCity` VARCHAR(191) NULL,
    `universityStartDate` DATETIME(3) NULL,
    `universityEndDate` DATETIME(3) NULL,
    `universityStatus` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Training` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trainingCertificates` VARCHAR(191) NULL,
    `trainingCompletionDate` DATETIME(3) NULL,
    `trainingDescription` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Experience` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `experienceDesignation` VARCHAR(191) NULL,
    `experienceCompany` VARCHAR(191) NULL,
    `experienceStartDate` DATETIME(3) NULL,
    `experienceEndDate` DATETIME(3) NULL,
    `experienceDescription` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_educationId_fkey` FOREIGN KEY (`educationId`) REFERENCES `Education`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_trainingId_fkey` FOREIGN KEY (`trainingId`) REFERENCES `Training`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_experienceId_fkey` FOREIGN KEY (`experienceId`) REFERENCES `Experience`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
