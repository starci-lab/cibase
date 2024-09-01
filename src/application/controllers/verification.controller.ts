import { VerificationControllerService } from "@/services"
import { RequestMessageResponse, RetrieveRequestBody, RetrieveResponse, VerifyMessageRequestBody, VerifyMessageResponse } from "@/services"
import { Body, Controller, HttpCode, HttpStatus, Logger, Post } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"

@ApiTags("Verification")
@Controller("api/v1/verification")
export class VerificationController {
    private readonly logger = new Logger(VerificationController.name)
    constructor(
        private readonly verificationService: VerificationControllerService
    ) {}

    @HttpCode(HttpStatus.OK)
    @ApiResponse({ type: VerifyMessageResponse, status: 200 })
    @Post("verify-message")
    public async verifyMessage(@Body() body: VerifyMessageRequestBody) {
        return await this.verificationService.verifyMessage(body)
    }

    @HttpCode(HttpStatus.OK)
    @ApiResponse({ type: RequestMessageResponse, status: 200 })
    @Post("request-message")
    public async requestMessage() {
        return await this.verificationService.requestMessage()
    }

    @HttpCode(HttpStatus.OK)
    @ApiResponse({ type: RetrieveResponse, status: 200 })
    @Post("retrieve")
    public async retrieve(@Body() body: RetrieveRequestBody) {
        return await this.verificationService.retrieve(body)
    }
}